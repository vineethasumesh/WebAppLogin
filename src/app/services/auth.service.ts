import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticatedUser="";
  constructor() { 
    
  }

  login(uname:string,pword:string){
    if(uname==='Vineetha' && pword==='admin'){
      this.authenticatedUser = uname;
      return 200
    }else{
      return 403
    }
  }
  
  getAuthenticatedUser(): string | null {
    return this.authenticatedUser;
  }


  



  
}
