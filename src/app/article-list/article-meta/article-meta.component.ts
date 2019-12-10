import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProfileRequestService } from 'src/app/api/profile-request.service';
import { ArticleRequestService } from 'src/app/api/article-request.service';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css']
})
export class ArticleMetaComponent implements OnInit {
  

  @Input() article;
  @Input() isMini;
  @Input() isUser;

  constructor(private router:Router,private profileSerivce:ProfileRequestService,private articleService:ArticleRequestService) {
  }

  ngOnInit() {
    if(this.isMini == undefined){
      this.isMini = false;
    }
  }

  navigateToProfile(){
    this.router.navigate(['/',this.article?this.article.author.username:''])
  }

  follow(){
    console.log(this.article.author.following);
    if(this.article.author.following){
      this.profileSerivce.unfollowUser(this.article.author.username).subscribe();
    } else {
      this.profileSerivce.followUser(this.article.author.username).subscribe();
    }
    this.article.author.following = !this.article.author.following;
  }

  favorite(){
    if(!this.article.favorited){
      this.articleService.favoriteArticle(this.article.slug).subscribe();
      this.article.favoritesCount +=1;
    } else {
      this.articleService.unfavoriteArticle(this.article.slug).subscribe();
      this.article.favoritesCount -=1;
    }
    this.article.favorited = !this.article.favorited;
  }

  deleteArticle(){
    this.articleService.deleteArticle(this.article.slug).subscribe();
    this.router.navigate(['']);
  }
}
