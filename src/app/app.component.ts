import {Component, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

import {ThemesService} from '@fundamental-ngx/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  cssUrl: SafeResourceUrl;
  cssCustomUrl: SafeResourceUrl;

  readonly themeQueryParamName = 'sap-theme';

  /** An RxJS Subject that will kill the data stream upon destruction (for unsubscribing)  */
  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private themesService: ThemesService) {
    themesService.setThemeByRoute(this.themeQueryParamName);
    this._listenForThemeChange();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private _listenForThemeChange(): void {
    this.themesService.onThemeQueryParamChange.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(theme => {
      if (theme?.customThemeUrl && theme?.themeUrl) {
        this.cssCustomUrl = theme.customThemeUrl;
        this.cssUrl = theme.themeUrl;
      }
    });
  }
}
