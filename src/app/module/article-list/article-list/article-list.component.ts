import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent  {
  selectedPage = 0;
  @Input() articles;
  @Input() listPage;
  @Output() onPage = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
    
  }

  goPage(page){
    this.selectedPage = page;
    this.onPage.emit(page);
  }
  


}
