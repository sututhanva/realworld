import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { LoggedDirective } from './directive/logged.directive';
import { LogoutDirective } from './directive/logout.directive';
import { RouterModule } from '@angular/router';
import { RequestService } from '../api/request.service';
import { YouareDirective } from './directive/youare.directive';



@NgModule({
  declarations: [
    LoggedDirective,
    LogoutDirective,
    YouareDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    LoggedDirective,
    LogoutDirective,
    YouareDirective
  ],
  providers: [
    RequestService,
    
  ]
})
export class SharedModule {
}
