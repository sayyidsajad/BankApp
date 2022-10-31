import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execution
  //properties and methods
  
  aim="Your perfect banking partner"

  account="Enter ur Acno here"

  acno="";//properties
  pswd="";

  userDetails:any={//object of objects
    1000:{acno:1000,username:'Alwin',password:1000,balance:100000},
    1001:{acno:1001,username:'Fayas',password:1001,balance:100000},
    1002:{acno:1002,username:'Jishna',password:1002,balance:100000},
  }
  constructor() { }//1st execution

  ngOnInit(): void {//2nd execution - life cycle hooks of angular 
    //initial process of component
  }

  //userdefined functions //4th execution
  acnoChange(event:any){
    this.acno=(event.target.value);
    console.log(this.acno);
  }
  pswdChange(event:any){
    this.pswd=(event.target.value);
    console.log(this.pswd);
  }
  login(){
    // alert('Login clicked')

    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){

      if(pswd==userDetails[acno]['password']){
        alert("login success")
      }else{
        alert("incorrect password")
      }
    }
    else{
      alert('user not found')
    }
  }
}
