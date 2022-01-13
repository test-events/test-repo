# Micro Frontend NGX Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) (version 11.2.14). For details see the official [Angular documentation](https://angular.io).

The Template is tested with Node v14.17 and NPM v7.19.  
Please note that this template doesn't support Internet Explorer.

## Dependencies

| Library                         | Version    | Details                                                                  | Documentation                                                                                              |
| ------------------------------- | ---------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Luigi Client                    | 1.14.0     |                                                                          | [Link](https://github.com/SAP/luigi/blob/master/docs/getting-started.md#luigi-client)                      |
| Fundamental Styles ngx core     | 0.31.0     | Browser animations and default Fonts are enabled.                        | [Link](https://sap.github.io/fundamental-ngx/#/platform/home)                                              |
| Fundamental Styles ngx platform | 0.31.0     | Browser animations, default Fonts and Translation are enabled.           |                                                                                                            |
| SAP Webcomponents               | 1.0.0-rc.9 |                                                                          |
| Protactor                       | 7.0.0      |                                                                          |
| Origami                         | 3.2.0      | Enables two-way binding for UI5 Webcomponents (extends ngDefaultControl) | [Link](https://github.com/SAP/ui5-webcomponents/blob/master/docs/Angular-tutorial.md#two-way-data-binding) |

**Important**  
In the case that you remove and recreate the [`package-lock.json`](package-lock.json) from scratch, it is required to run `npm install --legacy-peer-deps` once. If the `legacy-peer-deps` option is not used, the Origami library will cause issues during regular `npm install` when NPM v7+ is used.

### Additonal Information

* All dependencies within this template are fixed.
* CSS is enabled as the stylesheet format.
* Angular Routing is enabled.

## How to develop locally

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Please make sure that you have Java installed on your machine to be able to make use of Protactor. As well please make sure that you have installed Chrome on your machine.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
