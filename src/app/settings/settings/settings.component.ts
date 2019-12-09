import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserRequestService, User} from 'src/app/api/user-request.service';
import { DataSharedService } from 'src/app/api/data-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingForm: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserRequestService,private dataService:DataSharedService,private router:Router) {
    this.settingForm = this.fb.group({
      image: [''],
      username: [''],
      bio: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit() {
    this.userService.getUser().subscribe((data)=>{
      let user = data.user;
      this.settingForm = this.fb.group({
        image: [user.image],
        username: [user.username],
        bio: [user.bio],
        email: [user.email],
        password: ['']
      })
    })
  }

  updateUser(){
    let listControl = this.settingForm.controls;
    this.userService.updateUser(listControl.email.value,listControl.password.value,listControl.username.value,listControl.image.value,listControl.bio.value).subscribe((data : User)=>{
      this.dataService.updateSyncUser(data);
    });
    this.router.navigate(['/profile/',listControl.username.value]);
  }

}
