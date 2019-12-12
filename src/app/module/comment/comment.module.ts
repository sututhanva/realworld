import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule { }
