# V2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0. Read global installation and then cd to our folder and do `npm install`

## DEMO
 [DEMO](https://theo4u.github.io/made-in-nigeria/)

## Resources
- [Clarity UI](https://vmware.github.io/clarity)
- [DEVICONS](http://konpa.github.io/devicon)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Deploy  
- ng build -prod --base-href "/made-in-nigeria/" inside **v2** folder
- then perform this `git add -A && git commit -m "base url updated for deployment"`
- Run `git push` to update **master** with **dist**
- Run **git push origin `git subtree split --prefix dist master`:gh-pages --force**

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
