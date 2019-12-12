import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleRequestService, Article } from 'src/app/module/api/article-request.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  formArticle: FormGroup;
  slug: string;
  tagList: string[] = [];

  constructor(private fb:FormBuilder,private activedRoute:ActivatedRoute,private articleService:ArticleRequestService,private router: Router) {
    this.formArticle = this.fb.group({
      title:[''],
      description:[''],
      body:[''],
      tags:['']
    })
   }

  ngOnInit() {
    this.activedRoute.params.subscribe((params)=>{
      if(params.slug) {
        this.slug = params.slug;
        this.articleService.getArticleBySlug(params.slug).subscribe((data: Article)=>{
          this.formArticle = this.fb.group({
            title: data.article.title,
            description:data.article.description,
            body:data.article.body,
            tags:data.article.tagList,
          })
        })
      }
    })
  }

  interactArticle(){
    this.formArticle.controls.tags.setValue(this.tagList);
    if(this.slug){
      this.articleService.updateArticle(this.slug,{ "article": this.formArticle.value}).subscribe();
    } else {
      this.articleService.postArticle({ "article": this.formArticle.value}).subscribe((data:Article)=>{
        this.router.navigate(['/article',data.article.slug]);
      });
    } 
  }

  addTag(){
    this.tagList.push(this.formArticle.controls.tags.value);
    this.formArticle.controls.tags.reset();
  }

}
