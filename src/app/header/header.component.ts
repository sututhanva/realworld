import { Component, OnInit } from '@angular/core';
import { DataSharedService } from 'src/app/module/api/data-shared.service';
import { UserRequestService, User } from 'src/app/module/api/user-request.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userInfo:User;

  constructor(private dataService:DataSharedService,private userService:UserRequestService) { }

  ngOnInit() {
    if(localStorage.getItem('jwtToken')){
      this.dataService.updateSyncToken();
      this.userService.getUser().subscribe((data:User)=>{
        this.dataService.setUser(data);
        this.userInfo = data;
        this.dataService.updateSyncUser(this.userInfo);
      })
      this.dataService.getSyncUser().subscribe((data:User)=>{
        this.userInfo = data;
      })
    }
    
  }
  logOut(){
    this.dataService.clearToken();
  }

  
}
