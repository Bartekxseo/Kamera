import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user:string=""
  password:string=""
  start:string=""
  stop:string=""
  constructor(private basicService:BasicService, private location:Location, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeMode()
  {
    this.basicService.basicManualModeChangeGet();
  }
  saveModeChangeHours()
  {

  }
  saveUseraAndPass()
  {

  }
}
