import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsModel } from 'src/app/api/models';
import { BasicService } from 'src/app/api/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ip:string=""
  needUser:boolean=false;
  user:string=""
  password:string=""
  constructor(private basicService:BasicService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  subbmit()
  {

    this.basicService.postBasicFindCredentialsByIp(this.ip).subscribe(x=> {
      if(x.password!="" && x.username!="")
      {
        let url = '../settings/' + x.id?.toString();
        this.router.navigate([url],{relativeTo: this.route})
      }
      else
      {
        this.needUser=!this.needUser
        this.user=x.username ?? ""
        this.password=x.password ?? ""
      }

    })

  }

  addNewIp()
  {
    if(this.user!="" && this.password!="")
    {
      let params:CredentialsModel = {ipAdress: this.ip,username: this.user,password:this.password}
      console.log(params)
      this.basicService.postBasicAddNewCredentials(params).subscribe(x=>{
        this.basicService.postBasicFindCredentialsByIp(this.ip).subscribe(creds=>{
          let url = '../settings/' + x.id?.toString();
          this.router.navigate([url],{relativeTo: this.route})
        });
      });
    }
  }
}
