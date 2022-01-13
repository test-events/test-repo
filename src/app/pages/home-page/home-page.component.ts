import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppVersions } from '../../utils/versions';

import { ChangeDetectorRef } from '@angular/core';
import {ILuigiContextTypes, LuigiContextService} from "@luigi-project/client-support-angular";
import { linkManager, uxManager } from '@luigi-project/client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  version: string;

  message: string;

  port = window.location.port;

  buttonVisible = false;
  buttonDisabled = false;

  navigationPath: string;

  contextSubscription: Subscription;

  constructor(private ref: ChangeDetectorRef, private contextService: LuigiContextService) {
    this.version = AppVersions.GetAngularVersion();
  }

  ngOnInit(): void {
    this.contextSubscription = this.contextService.contextObservable().subscribe( data =>{
      this.message = data.contextType === ILuigiContextTypes.INIT ? 'Hello Luigi!' : 'Luigi was updated!';
      if(data.context.pathForNav) {
        this.navigationPath = data.context.pathForNav;
        this.buttonVisible = true;
      }
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    if(this.contextSubscription) {
      this.contextSubscription.unsubscribe();
    }
  }

  buttonClicked(): void {
    linkManager().pathExists(this.navigationPath).then((exists: boolean) => {
      if (exists) {
        linkManager().navigate(this.navigationPath);
      } else {
        uxManager().showAlert({ text: `Path "${this.navigationPath}" doesn't exist.`, type: 'warning'});
        this.buttonDisabled = true;
        this.ref.detectChanges();
      }
    });
  }

  openModalClicked(): void {
    linkManager().fromVirtualTreeRoot().openAsModal('core', {title:'Core', size:'m'});
  }
}
