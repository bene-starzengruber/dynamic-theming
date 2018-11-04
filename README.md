# DynamicBranding
Example App on how to use CSS Variables to enable dynamic theming.
Uses polyfills to also work for IE11 despite it not supporting CSS Variables

![alt text](https://i.imgur.com/prMuPiH.png)

Application is split in 2 components
* Theme-Component: Shows current selected theme colors and updates colors
* Content-Component: Shows some elements which are styled dynamically

To add theming-colors, you have to add it to the themables-array in the ThemingService.
To provide a default color, also add it to themes.less

# How to run
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
