import { Component, OnInit } from '@angular/core';
import { ProfileRequestService, ProfileData } from 'src/app/api/profile-request.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleRequestService } from 'src/app/api/article-request.service';
import { httpOption } from 'src/app/api/request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isMyArticle: boolean = true;
  profile: ProfileData;
  articles;
  option: {
    endpoint: string,
    params: httpOption[],
    limit: string;
  }

  constructor(private activedRoute: ActivatedRoute,private profileService:ProfileRequestService,private articleService:ArticleRequestService) { }

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

  checkArticle(username){
    if(this.isMyArticle){
      this.option = {
        endpoint: '',
        params: [{nameOption:"author",valueOption:username},{nameOption:'limit',valueOption:'5'}],
        limit: '5'
      }

      this.articleService.getArticle(this.option.endpoint,this.option.params).subscribe((data)=>{
        this.articles = data;
        console.log(123);
      })
    }

    if(!this.isMyArticle){
      this.option = {
        endpoint: '',
        params: [{nameOption:"favorited",valueOption:username},{nameOption:'limit',valueOption:'5'}],
        limit: '5'
      }
      this.articleService.getArticle(this.option.endpoint,this.option.params).subscribe((data)=>{
        this.articles = data;
      })
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
