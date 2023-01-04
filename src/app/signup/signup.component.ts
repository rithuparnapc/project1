import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userid:any;
  uname:any;
  pswd:any;
  

  constructor(private ds:DataService,private router:Router){}

  signup(){
    var userid=this.userid;
    var uname=this.uname;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;
    const result=this.ds.signup(userid,uname,pswd)
    if(result){
      alert('Signed In :)')
      this.router.navigateByUrl('login');
    }
    else{
      alert('Register Failed :(')
    }
    
    
}
}
