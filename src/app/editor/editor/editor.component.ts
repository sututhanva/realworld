import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleRequestService, Articles } from 'src/app/api/article-request.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  formArticle: FormGroup;
  slug: string;

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
        this.articleService.getArticleBySlug(params.slug).subscribe((data: any)=>{
          this.formArticle = this.fb.group({
            title: data.article.title,
            description:data.article.description,
            body:data.article.body,
            tags:['']
          })
        })
      }
    })
  }

  interactArticle(){
    if(this.slug){
      this.articleService.updateArticle(this.slug,{ "article": this.formArticle.value}).subscribe();
    } else {
      this.articleService.postArticle({ "article": this.formArticle.value}).subscribe((data:any)=>{
        this.router.navigate(['/article',data.article.slug]);
      });
    } 
  }

}
