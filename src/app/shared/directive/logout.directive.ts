import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';
import { DataSharedService } from 'src/app/api/data-shared.service';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {

  constructor(private dataService:DataSharedService,private viewContainer:ViewContainerRef,private tempRef:TemplateRef<any>) { }

  ngOnInit(){
    this.dataService.getSyncToken().subscribe((token)=>{
      this.viewContainer.clear();
      if(!token){
        this.viewContainer.createEmbeddedView(this.tempRef);
      }
    })
  }
}
