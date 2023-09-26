import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  username: string | null | undefined;  
  constructor(private router:Router,private auth:AuthService){
    
  }
  ngOnInit() {
    this.username = this.auth.getAuthenticatedUser(); // Get the username from AuthService
  }

  logout_click(){
    this.router.navigate(['login']);
  }

  

}
