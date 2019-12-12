import { Component, OnInit, OnChanges } from '@angular/core';
import { Articles, ArticleRequestService } from 'src/app/module/api/article-request.service';
import { Tags, TagRequestService } from 'src/app/module/api/tag-request.service';
import { httpOption } from 'src/app/module/api/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listToggle = ['Your Feed','Global Feed'];
  feedSeleteced = this.listToggle[1];
  articles: Articles;
  tags: Tags;
  listPage = [];
  option: {
    endpoint: string,
    params: httpOption[],
  }

  constructor(private tagService:TagRequestService,private articleService:ArticleRequestService) { }

  ngOnInit() {
    this.tagService.getTags().subscribe((tags:Tags)=>{
      this.tags = tags;
    })
    this.checkFeed();
  }

  toggleFeed(toggle){
    this.feedSeleteced = toggle;
    this.checkFeed();
  }

  addTag(tag){
    this.listToggle[2]= tag;
    this.feedSeleteced = tag;
    this.checkFeed();
  }

  goPage(page=0){
    let params = [{nameOption:'offset',valueOption:`${page*5}`},{nameOption:'limit',valueOption:`10`}];
    params = params.concat(this.option.params);

    this.articleService.getArticle(this.option.endpoint,params).subscribe((data)=>{
      this.articles = data;
      let maxPage = Math.ceil(Number(data.articlesCount)/10);
      this.listPage = Array(maxPage).fill(1).map((x,index)=>{
        return x=index;
      })
    })
  }

  checkFeed(){
    switch(this.feedSeleteced){
      case this.listToggle[0]: {
          this.option = {
            endpoint: '/feed',
            params: [],
          }
          this.goPage();
        }
        break;
      case this.listToggle[1]: {
          this.option = {
            endpoint: '',
            params: [],
          }
          this.goPage();
        }
        break;
      case this.listToggle[2]:{
        this.option = {
          endpoint: '',
          params: [{nameOption:'tag',valueOption:this.listToggle[2]}],
        }
        this.goPage();
        }
        break;
    }
  }

}
