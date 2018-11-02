import { Component } from '@angular/core';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  private themeBase = document.body;

  themables = [
    'backgroundColor',
    'textColor'
  ];

  ngOnInit() {
  	cssVars();
  }

  updateTheme(themeOption: string, value: any) {
    const cssVariable = '--' + themeOption;
    this.themeBase.style.setProperty(cssVariable, value);
  }

  getCurrentThemeValue(themeOption: string) {
    return getComputedStyle(this.themeBase).getPropertyValue('--' + themeOption).trim();
  }

}
