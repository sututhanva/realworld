import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { DataSharedService } from 'src/app/module/api/data-shared.service';

@Directive({
  selector: '[appLogged]'
})
export class LoggedDirective implements OnInit{
  @Input('appLogged') condition:boolean;
  constructor(private dataService:DataSharedService,private viewContainer:ViewContainerRef,private tempRef:TemplateRef<any>) { }

  ngOnInit(){
    this.dataService.getSyncToken().subscribe((token)=>{
      this.viewContainer.clear();
      if(Boolean(token) == this.condition){
        this.viewContainer.createEmbeddedView(this.tempRef);
      } 
    })
  }
}
