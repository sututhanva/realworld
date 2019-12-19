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
  maxProgress;
  isDisplay: boolean;
  constructor(private loadingService:LoadingService) {
    
   }

  ngOnInit() {
    // var interval = setInterval(() => {
    //   if (this.width >= 90) {
    //     clearInterval(interval); 
    //     return;
    //   }
    //   this.fullSet = this.fullSet / 2;
    //   this.width += this.fullSet;
    // }, 300);
    this.loadingService.isLoading.subscribe((isLoading)=>{
      if(isLoading == true){
        this.progress = 0;
        this.maxProgress = 60;
        var theInterval = setInterval(()=>{
          if(this.progress >60){
            clearInterval(theInterval)
            return;
          }
          this.maxProgress = this.maxProgress /2;
          this.progress += this.maxProgress
        },100)
        this.isDisplay = true;
      }
      if(isLoading == false){
        this.progress = 100;
        setTimeout(() => {
          this.progress = 0;
          this.isDisplay = false;
        }, 500);
        
      }
    })
    
  }

}
