import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  progress;
  isLoading;
  constructor(private loadingService:LoadingService) {
    
   }

  ngOnInit() {
    var theInterval = null;
    this.loadingService.isLoading.subscribe((isLoading)=>{
      if(isLoading==true){
        this.progress = 0;
        // theInterval = setInterval(()=>{
        //   console.log(1);
        //   if(this.progress <80){
        //     this.progress += 20;
        //   }
        // },500)
        this.isLoading = true;
      } else {
        this.progress = 100;
        setTimeout(()=>{
          this.isLoading = false;
        },500)
        // setTime
      }
    })
    
  }

}
