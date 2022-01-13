import {Component, OnInit} from '@angular/core';
import {AppVersions} from '../../utils/versions';

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrls: ['./platform-page.component.css']
})
export class PlatformPageComponent implements OnInit {

  version = '';

  booleanValue: boolean;
  stringValue: string;

  ngOnInit(): void {
    this.version = AppVersions.GetPlatformVersion();
  }
}
