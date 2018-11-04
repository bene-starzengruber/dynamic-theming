import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ThemingService } from './theme/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private themingService: ThemingService) {}

  ngOnInit() {
    // Apply default variables 
    this.themingService.initTheme();
  }

}
