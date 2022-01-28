import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    SafePipeModule,
    FontAwesomeModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
