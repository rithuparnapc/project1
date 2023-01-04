import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userid: any;
  currentUser:any;

  constructor() { }
  userDetails:any={
    1000:{userid:1000,username:"fabi",password:1000},
    1001:{userid:1001,username:"ikru",password:1001},
    1002:{userid:1002,username:"jifa",password:1002},
  }


  signup(userid:any,uname:any,password:any){
    
    var userDetails=this.userDetails;

    if(userid in this.userDetails){
      return false;
    }else{
      userDetails[userid]={
        userid:userid,
        uname:uname,
        password:password
      }
      return true;
      //alert('signed in :)')
    }

  }

  login(userid:any,pswd:any){
    var userDetails=this.userDetails;
    if(userid in this.userDetails){
        if(pswd==this.userDetails[userid]['pswd']){
          this.currentUser=userDetails[userid]['username'];
          return true;

        }
      
      else{
        alert('invailed password :(')
        return false;
      }
      
    }else{
      alert('invalid user details')
      
      return false;
    }
      //alert('signed in :)')
    }

  }

 
 