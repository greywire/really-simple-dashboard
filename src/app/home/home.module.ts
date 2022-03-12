import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    SafePipeModule,
    FontAwesomeModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
