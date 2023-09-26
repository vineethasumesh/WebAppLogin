import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  username="";
  password="";

  constructor(private auth:AuthService,private router:Router){
    
  }
  

  errorMsg="";

  login(){
    debugger;
    if(this.username.trim().length===0){
      this.errorMsg="Username required";
    }else if(this.password.trim().length===0){
      this.errorMsg="Password required";
    }else{
      this.errorMsg="";
      let res= this.auth.login(this.username,this.password);
      
      if(res === 200){
          this.router.navigate(['home'])
          console.log(this.username);
      }
      if(res === 403){
        this.errorMsg="Invalid credentials"
      }
    }
  }
  

  signup_page(){
    
  }

  
}
