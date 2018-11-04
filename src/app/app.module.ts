import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ThemingService } from './theme/theming.service';
import { ThemeComponent } from './theme/theme.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ThemingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
