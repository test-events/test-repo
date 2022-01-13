import { Component, OnInit } from '@angular/core';
import {AppVersions} from '../../utils/versions';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.css']
})
export class CorePageComponent implements OnInit {

  version = '';

  booleanValue: boolean;
  stringValue: string;

  ngOnInit(): void {
    this.version = AppVersions.GetPlatformVersion();
  }
}
