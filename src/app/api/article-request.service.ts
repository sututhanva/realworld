import { Injectable } from '@angular/core';
import { RequestService, httpOption } from './request.service';

export interface ArticleData{
  "slug": string,
      "title": string,
      "description": string,
      "body": string,
      "tagList": [string, string],
      "createdAt": string,
      "updatedAt": string,
      "favorited": Boolean,
      "favoritesCount": Number,
      "author": {
        "username": string,
        "bio": string,
        "image": string,
        "following": Boolean
      }
}

export interface Articles{
  "article":ArticleData[],
  "articlesCount": Number
}


export interface CommentData{
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface Comments{
  "comments": CommentData[];
}

@Injectable({
  providedIn:"root"
})
export class ArticleRequestService {

  constructor(private requestService:RequestService) { }

  getArticle(endpoint='',params?:httpOption[]){
    if(params){
      return this.requestService.getRequest<Articles>('/articles'+endpoint,undefined,params);
    } else {
      return this.requestService.getRequest<Articles>('/articles'+endpoint);
    }
  }

  getArticleComment(slug='',params?:httpOption[]){
    return this.requestService.getRequest(`/articles/${slug}/comments`);
  }

  getArticleBySlug(slug){
    return this.requestService.getRequest(`/articles/${slug}`);
  }

  updateArticle(slug,body){
    return this.requestService.putRequest(`/articles/${slug}`,body)
  }

  postArticle(body){
    return this.requestService.postRequest(`/articles`,body);
  }

  postArticleComment(slug,comment){
    return this.requestService.postRequest(`/articles/${slug}/comments`,{
      "comment": {
        "body": comment
      }
    })
  }


  favoriteArticle(slug){
    return this.requestService.postRequest(`/articles/${slug}/favorite`,{});
  }

  unfavoriteArticle(slug){
    return this.requestService.deleteRequest(`/articles/${slug}/favorite`);
  }
}
