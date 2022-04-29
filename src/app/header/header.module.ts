import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { IconTextPlaceholderComponent } from './icon-text-placeholder/icon-text-placeholder.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LogoComponent,
    IconTextPlaceholderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
