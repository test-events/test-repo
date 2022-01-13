import { dependencies } from '../../../package.json';

export class AppVersions {
  static GetAngularVersion(): string {
    return dependencies['@angular/core'];
  }
  static GetUiWebComponentVersion(): string {
    return dependencies['@ui5/webcomponents'];
  }
  static GetCoreVersion(): string {
    return dependencies['@fundamental-ngx/core'];
  }
  static GetPlatformVersion(): string {
    return dependencies['@fundamental-ngx/platform'];
  }
}
