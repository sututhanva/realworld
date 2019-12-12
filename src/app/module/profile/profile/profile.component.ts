import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileRequestService, ProfileData } from '../../api/profile-request.service';
import { ArticleRequestService, Articles } from '../../api/article-request.service';
import { httpOption } from '../../api/request.service';
import { DataSharedService } from '../../api/data-shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isUser: boolean;
  isMyArticle: boolean = true;
  profile: ProfileData;
  articles: Articles;
  listPage = [];
  option: {
    endpoint: string,
    params: httpOption[],
  }

  constructor(private activedRoute: ActivatedRoute,private profileService:ProfileRequestService,private articleService:ArticleRequestService,private dataService:DataSharedService) { }

  ngOnInit() {
    this.activedRoute.params.subscribe((param)=>{
      this.profileService.getProfile(param.username).subscribe((data)=>{
        this.profile = data.profile;
        this.checkArticle(this.profile.username);
      })
    })
  }

  toggleArticle(){
    this.isMyArticle = !this.isMyArticle;
    this.checkArticle(this.profile.username);
  }

  goPage(page=0){
    let params = [{nameOption:'offset',valueOption:`${page*5}`},{nameOption:'limit',valueOption:`5`}];
    params = params.concat(this.option.params);
    this.articleService.getArticle(this.option.endpoint,params).subscribe((data)=>{
      this.articles = data;
      let maxPage = Math.ceil(Number(data.articlesCount)/5);
      this.listPage = Array(maxPage).fill(1).map((x,index)=>{
        x=index;
      })
    })
  }

  checkArticle(username){
    if(this.isMyArticle){
      this.option = {
        endpoint: '',
        params: [{nameOption:"author",valueOption:username}],
      }
      this.goPage();
    }

    if(!this.isMyArticle){
      this.option = {
        endpoint: '',
        params: [{nameOption:"favorited",valueOption:username}],
      }
      this.goPage();
    }
    
  }

  follow(){
    if(this.profile.following){
      this.profileService.unfollowUser(this.profile.username).subscribe();
    } else {
      this.profileService.followUser(this.profile.username).subscribe();
    }
    this.profile.following = !this.profile.following;
  }


}
