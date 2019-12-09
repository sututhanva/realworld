import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { DataSharedService } from 'src/app/api/data-shared.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authenForm : FormGroup;
  isRegister:boolean;
  constructor(private activeRoute:ActivatedRoute,private fb:FormBuilder,private router:Router,private authenService: AuthenticationService,private dataService:DataSharedService) {
    this.authenForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
   }

  ngOnInit() {
    this.isRegister = (this.router.url == '/register');
  }

  signIn(){
    let {email,password} = this.authenForm.controls;
    this.authenService.loginUser(email.value,password.value).subscribe((data)=>{
      localStorage.setItem('jwtToken',data['user'].token);
      this.dataService.updateSyncToken();
      this.router.navigate(['']);
    })
  }

  signUp(){
    let {email,username,password} = this.authenForm.controls;
    this.authenService.registerUser(email.value,password.value,username.value).subscribe((data : any)=>{
      localStorage.setItem('jwtToken',data['user'].token);
      this.dataService.updateSyncToken();
      this.router.navigate(['']);
    })
  }

}
