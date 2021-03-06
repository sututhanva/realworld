import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './module/authentication/authentication.module';
import { HomeModule } from './module/home/home.module';
import { SharedModule } from './module/shared/shared.module';
import { ApiModule } from './module/api/api.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';

import { LoadingInterceptorService } from './interceptor/loading-interceptor.service';
import { LoadingService } from './loader/loading.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    HomeModule,
    ApiModule.forRoot()
  ],
  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
