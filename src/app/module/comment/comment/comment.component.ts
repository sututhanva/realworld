import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/module/api/article-request.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  
  @Input() comments:Comments;
  constructor() {
    
   }

  ngOnInit() {
    
  }

}
