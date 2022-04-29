import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { ButtonComponent } from './button/button.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    ButtonComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
