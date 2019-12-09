import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleMetaComponent } from './article-meta/article-meta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent
  ]
})
export class ArticleListModule { }
