import { Router } from '@angular/router';
import { UserService } from './../user.service';

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {

  constructor(private formBuilder : FormBuilder,
              private userservice:UserService,
              private router: Router
              ){
                if(localStorage.getItem("token")){
                  userservice.btnSignValue='sign in'
                  localStorage.removeItem("token")
                }
                else
                userservice.btnSignValue='Sign In'


              }


  authForm=this.formBuilder.nonNullable.group(
    {
      login:['',Validators.required],
      password:['',Validators.required]
    }
  )
  checkLogin(){
    if(this.authForm.value.login &&this.authForm.value.password)
    this.userservice.getUser(this.authForm.value.login,this.authForm.value.password).
  subscribe(
    result=>{
      if (result.length){
        localStorage.setItem("token",result[0].token)
        this.userservice.btnSignValue='sign Out'
      this.router.navigateByUrl('')
    }
      else
      alert('login ou mot de passe incorrect bro')

  }


)


  }
  }
