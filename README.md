# Humanforce Login

This is a simple login app using Angular and Foundation.

## Setup

1. Run `npm install -g @angular/cli` to install Angular if you haven't already
2. Clone the repo
3. Run `npm install`
4. Run `ng serve` to start the development server.

## Notes

**Some room for improvement:**

1. Decreasing the browser's viewport height shows image decorations classing with logo and login elements from tablet up.
2. Need to transition the fields downwards when validation message box fades in.

**Other:**

1. Not utilising *src/app/app.component.spec.ts* that ships with the generated angular project as I don't have Jasmine/unit testing.
2. I added *src* and *node_modules* to *stylePreprocessorOptions includePaths* within *angular.json* build config to resolve vendor imports in *style.scss*, but had trouble with that, so I directly imported foundation *(../node_modules/foundation-sites/scss/foundation.scss rather than ~foundation-sites/scss/foundation)*.