import { Component, OnInit } from '@angular/core';
import {AppVersions} from '../../utils/versions';

// Luigi client requirements
import { ChangeDetectorRef } from '@angular/core';
import {
  addInitListener,
  addContextUpdateListener
} from '@luigi-project/client';

@Component({
  selector: 'app-ui5-page',
  templateUrl: './ui5-page.component.html',
  styleUrls: ['./ui5-page.component.css']
})
export class Ui5PageComponent implements OnInit {

  version = '';

  booleanValue: boolean;
  stringValue: string;

  ngOnInit(): void {
    this.version = AppVersions.GetUiWebComponentVersion();
  }

}
