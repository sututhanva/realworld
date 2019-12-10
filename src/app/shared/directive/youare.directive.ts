import { Directive, Input, OnInit, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';
import { DataSharedService } from 'src/app/api/data-shared.service';
import { User } from 'src/app/api/user-request.service';

@Directive({
  selector: '[appYou]'
})
export class YouareDirective implements OnChanges{
  
  @Input() appYou;
  constructor(
    private dataService:DataSharedService,
    private viewContainer:ViewContainerRef,
    private tempRef:TemplateRef<any>,
    ) { }
  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
  }

}
