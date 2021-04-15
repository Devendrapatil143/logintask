import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import {Router} from  '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form:FormGroup;
  
  constructor(public service:LoginService,private router: Router) { 
    this.login_form= new FormGroup({

      email:new FormControl(),
      password:new FormControl()

    })
  }

  ngOnInit(): void {
  }

  login():any{
this.service.authenticate(this.login_form.value).subscribe((posRes)=>{
localStorage.setItem("login_Details",JSON.stringify(posRes));
console.log("login successfully");
this.router.navigate(['Dashboard']);


})

  }

}
