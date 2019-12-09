import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleRequestService } from 'src/app/api/article-request.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnChanges {
  pages;
  selectedPage;
  @Input() articles;
  @Input() option;

  
  constructor(private router:Router,private articleService:ArticleRequestService) { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.pages = [];
    if(this.articles){
      let sumPage = Math.ceil(this.articles.articlesCount/this.option.limit);
      this.pages = Array(sumPage).fill(1).map((x,y)=>{
          return x=y;
      })
    }
  }

  ngOnInit() {
    
  }

  goPage(page){
    let params = [{nameOption:'offset',valueOption:`${Number(page)*this.option.limit}`},{nameOption:'limit',valueOption:`${this.option.limit}`}];
    this.selectedPage = page;
    if(this.option.params){
      params = params.concat(this.option.params)
    }
    this.articleService.getArticle(this.option.endpoint,params).subscribe((data)=>{
      this.articles = data;
    })
  }


}
