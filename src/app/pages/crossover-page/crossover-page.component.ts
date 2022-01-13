import { Component, OnInit } from '@angular/core';

// SAP Fundamental Styles requirements
import { ViewChild, ElementRef } from '@angular/core';
import { DynamicPageCollapseChangeEvent } from '@fundamental-ngx/platform';

// Luigi client requirements
import { ChangeDetectorRef } from '@angular/core';
import {ILuigiContextTypes, LuigiContextService} from "@luigi-project/client-support-angular";

@Component({
  selector: 'app-root',
  templateUrl: './crossover-page.component.html',
  styleUrls: ['./crossover-page.component.css']
})
export class CrossoverPageComponent implements OnInit {

  input1 = "test";
  input2 = true;

  constructor(private ref: ChangeDetectorRef, private contextService: LuigiContextService) { }

  title = 'dxp-micro-frontend-ngx';

  // code used in <fd-dynamic-page>
  @ViewChild('overlay')
  overlay: ElementRef<HTMLElement>;

  fullscreen = false;

  onCollapseChange(event: DynamicPageCollapseChangeEvent): void {
    console.log('collapse changed');
  }

  resizeClicked(event: Event): void {
    event.stopPropagation();
  }

  openPage(): void {
    this.fullscreen = true;
    this.overlay.nativeElement.style.width = '100%';
  }
  closePage(event: Event): void {
    event.stopPropagation();
    this.fullscreen = false;
    this.overlay.nativeElement.style.width = '0%';
  }

  // Luigi client example usage
  public message: string;

  ngOnInit() {
    this.contextService.contextObservable().subscribe(context =>{
      this.message = context.contextType === ILuigiContextTypes.INIT ? 'Hello Luigi!' : 'Luigi was updated!';
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    });
  }

  port = window.location.href.split(":")[2]
}
