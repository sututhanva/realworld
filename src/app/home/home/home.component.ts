import { Component, OnInit } from '@angular/core';
import { Articles, ArticleRequestService } from 'src/app/api/article-request.service';
import { Tags, TagRequestService } from 'src/app/api/tag-request.service';
import { httpOption } from 'src/app/api/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFeed: boolean = false;
  articles: Articles;
  tags: Tags;
  option: {
    endpoint: string,
    params: httpOption[],
    limit: string;
  }

  constructor(private tagService:TagRequestService,private articleService:ArticleRequestService) { }

  ngOnInit() {
    this.tagService.getTags().subscribe((tags:Tags)=>{
      this.tags = tags;
    })
    this.checkFeed();
  }

  toggleFeed(){
    this.isFeed = !this.isFeed;
    this.checkFeed();
  }

  checkFeed(){
    if(this.isFeed){
      this.option = {
        endpoint: '/feed',
        params: [],
        limit: '10'
      }
      this.articleService.getArticle(this.option.endpoint).subscribe((data)=>{
        this.articles = data;
      })
    }

    if(!this.isFeed){
      this.option = {
        endpoint: '',
        params: [],
        limit: '10'
      }
      this.articleService.getArticle().subscribe((data)=>{
        this.articles = data;
      }) 
    }
  }

}
