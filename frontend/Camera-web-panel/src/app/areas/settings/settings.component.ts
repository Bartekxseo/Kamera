import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CredentialsModel } from 'src/app/api/models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  id:number | undefined
  user:string | undefined = ""
  password:string| undefined=""
  start:string| undefined=""
  stop:string| undefined=""
  currentlyOn:boolean=false;
  interval:any;
  constructor(private basicService:BasicService, private location:Location, private route:ActivatedRoute) {
    this.interval = setInterval(()=> {
      this.UpdateMode()
    },60*1000)
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.basicService.postBasicFindCredentialsById(this.id).subscribe(x=> {
      this.user=x.username;
      this.password=x.password;
      this.start=x.nightModeStart;
      this.stop=x.nightModeEnd;
    });
    this.UpdateMode()
  }

  UpdateMode()
  {
    this.basicService.getBasicGetCurrentMode(this.id).subscribe(mode=> this.currentlyOn=mode)
  }

  changeMode()
  {
    this.basicService.getBasicManualModeChange(this.id).subscribe(x=> { this.UpdateMode()});
  }
  saveModeChangeHours()
  {
    let creds:CredentialsModel = {username:this.user,password:this.password,id:this.id,nightModeStart:this.start,nightModeEnd:this.stop}
    this.basicService.postBasicUpdateHours(creds).subscribe();
  }
  saveUseraAndPass()
  {
    let creds:CredentialsModel = {username:this.user,password:this.password,id:this.id}
    this.basicService.postBasicUpdateCredentials(creds).subscribe();
  }
}
