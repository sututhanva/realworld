import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSharedService } from './data-shared.service';
import { UserRequestService } from './user-request.service';
import { ProfileRequestService } from './profile-request.service';
import { TagRequestService } from './tag-request.service';
import { ArticleRequestService } from './article-request.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApiModule { 
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: ApiModule,
      providers: [DataSharedService,UserRequestService,ProfileRequestService,TagRequestService,ArticleRequestService]
    }
  }
}
