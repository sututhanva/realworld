import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { DataSharedService } from 'src/app/api/data-shared.service';

@Directive({
  selector: '[appLogged]'
})
export class LoggedDirective implements OnInit{

  constructor(private dataService:DataSharedService,private viewContainer:ViewContainerRef,private tempRef:TemplateRef<any>) { }

  ngOnInit(){
    console.log(123);
    this.dataService.getSyncToken().subscribe((token)=>{
      this.viewContainer.clear();
      if(token){
        this.viewContainer.createEmbeddedView(this.tempRef);
      } 
    })
  }
}
