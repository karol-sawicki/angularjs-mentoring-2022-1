import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HeaderModule } from '../header/header.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { SectionModule } from '../section/section.module';
import { CoursesListModule } from '../courses-list/courses-list.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbsModule,
    SectionModule,
    CoursesListModule,
    FooterModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
