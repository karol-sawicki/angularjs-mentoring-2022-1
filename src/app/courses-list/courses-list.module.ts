import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { IconButtonComponent } from '../icon-button/icon-button/icon-button.component';
import { IconButtonModule } from '../icon-button/icon-button.module';



@NgModule({
  declarations: [
    CourseListItemComponent,
    CoursesListComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesListModule { }
