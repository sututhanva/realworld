import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { LoggedDirective } from './directive/logged.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoggedDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    LoggedDirective,
  ],
  providers: [
  ]
})
export class SharedModule {
}
