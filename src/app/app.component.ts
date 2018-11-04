import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ThemingService } from './theming/theming.service';
import { stringify } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  private themeBase = document.body;

  themables = [
    '--backgroundColor',
    '--textColor'
  ];

  currentTheme: {};

  constructor(private themingService: ThemingService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.themingService.initTheme((theme) => this.setCurrentTheme(theme));
  }

  updateTheme(themeOption: string, value: any) {
    this.themingService.updateTheme({ [themeOption]: value }, (theme) => this.setCurrentTheme(theme));
  }

  private setCurrentTheme(theme: {}) {
    this.currentTheme = theme;
    this.changeDetector.markForCheck();
  }

}
