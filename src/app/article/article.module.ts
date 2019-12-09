import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { CommentModule } from '../comment/comment.module';
import { ArticleListModule } from '../article-list/article-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    CommentModule,
    ArticleListModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticleModule { }
