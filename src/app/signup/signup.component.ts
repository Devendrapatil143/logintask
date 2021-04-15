import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormControl, Validators } from '@angular/forms';  
  
import { Router } from '@angular/router';  
import { LoginService } from '../login.service';
  
@Component({  
  selector: 'app-signup',  
  templateUrl: './signup.component.html',  
  styleUrls: ['./signup.component.css']  
})  
export class SignupComponent implements OnInit {  
  
  
  login_form:FormGroup;
  msg: string;
  
  constructor(public service:LoginService,private router: Router) { 
    this.login_form= new FormGroup({

      email:new FormControl(),
      password:new FormControl()

    })
  }

  ngOnInit(): void {
  }

  login():any{
this.service.register(this.login_form.value).subscribe((posRes)=>{
  localStorage.setItem("login_Details",JSON.stringify(posRes));
console.log("Register successfully");
this.msg="Register Successfully"
})

  }

}