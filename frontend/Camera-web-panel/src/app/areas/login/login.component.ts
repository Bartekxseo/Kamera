import { Component, OnInit } from '@angular/core';
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
  constructor(private basicService:BasicService) { }

  ngOnInit(): void {
  }
  subbmit()
  {

    this.basicService.postBasicFindCredentialsByIp(this.ip).subscribe(x=> {
      if(x.password!="" && x.username!="")
      {

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
    let params:CredentialsModel = {ipAdress: this.ip,username: this.user,password:this.password}
    console.log(params)
    this.basicService.postBasicAddNewCredentials(params).subscribe()
  }
}
