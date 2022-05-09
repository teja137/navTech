import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email :['', Validators.required],
      password:['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{[]
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });

      if(user){
        let user = {user:'login'}
        localStorage.setItem('user',JSON.stringify(user))

        this.loginForm.reset();
     this.route.navigate(['orders'])
      }else{
        alert("user not found")
      }
    }, err=>{
      alert("something went wrong")
    })
  }
  
}
