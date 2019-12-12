import { Component, OnInit, OnChanges } from '@angular/core';
import { ArticleRequestService, Articles, ArticleData, CommentData, Comments } from 'src/app/module/api/article-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataSharedService } from 'src/app/module/api/data-shared.service';
import { User } from 'src/app/module/api/user-request.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  isUser: boolean;
  article:ArticleData;
  comments:CommentData[];
  commentControl: FormControl;
  paramURL: string;

  constructor(private articleService:ArticleRequestService,private activedRoute:ActivatedRoute,private dataService:DataSharedService,private router: Router) {
    this.commentControl = new FormControl();
   }

  ngOnInit() {
    this.activedRoute.params.subscribe((data)=>{
      this.paramURL = data.slug;

      this.articleService.getArticleBySlug(this.paramURL).subscribe((data)=>{
        this.article = data['article'];
        this.checkUser(data.article.author.username);
      })

      this.articleService.getArticleComment(this.paramURL).subscribe((data)=>{
        this.comments = data['comments'];
      })
    })
  }

  postComment(){
    this.articleService.postArticleComment(this.paramURL,this.commentControl.value).subscribe((data)=>{
      this.comments.push(data['comment']);
      this.commentControl.setValue('');
    });
  }

  checkUser(username){
    if(this.dataService.getUser().user.username==username){
      this.isUser = true;
    } else {
      this.isUser = false;
    }
    // this.dataService.getSyncUser().subscribe((data:User)=>{
    //   console.log(1);
    //   if(data.user.username==this.article.author.username){
    //     this.isUser = true;
    //   } else {
    //     this.isUser = false;
    //   }
    // }) 
  }

}
