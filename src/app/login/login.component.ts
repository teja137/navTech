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
  constructor(private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email :['', Validators.required],
      password:['', Validators.required]
    })
  }
  login(){
     this.route.navigate(['orders'])
  }
}
