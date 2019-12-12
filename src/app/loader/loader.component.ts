import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  progress = 0;
  constructor(private loadingService:LoadingService) {
    
   }

  ngOnInit() {
    this.loadingService.isLoading.sub
    setInterval(()=>{
      if(this.progress <100){
        this.progress += 20;
      }
    },1000)
  }

}
