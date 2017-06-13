# V2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

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
- ng build --prod from `master` inside **v2** folder 
- switch branch to `gh-pages` then copy the content inside `v2/dist/` to root of `gh-pages` branch
- lastly open the index.html update all the **src** to point to `made-in-nigeria/file_name.js` and for css it is **href**
**E.G**
    ``` js
      <script type="text/javascript" src="made-in-nigeria/inline.3114fcf398949fd8a0ef.bundle.js"></script>
      <script type="text/javascript" src="made-in-nigeria/polyfills.2024f3f29aec2a67603a.bundle.js"></script>
      <script type="text/javascript" src="made-in-nigeria/scripts.5ad9e1a61eb239e66cf7.bundle.js"></script>
      <script type="text/javascript" src="made-in-nigeria/vendor.edc6374f91918c26c471.bundle.js"></script>
      <script type="text/javascript" src="made-in-nigeria/main.2cd2971b9534a9ad1afe.bundle.js"></script>
    ``` 
for css this `<link href="made-in-nigeria/styles.172773fea1a6459f0d71.bundle.css" rel="stylesheet"/>`   
 
    

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
