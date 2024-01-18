import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
  constructor(public  TodoService:TodoService,
              public UserService: UserService,
              private router: Router){
                  if (localStorage.getItem("token"))
                  UserService.btnSignValue='sign Out'
                else
                UserService.btnSignValue='sign In'


              }

  signOut(){
    localStorage.removeItem("token")
    window.location.reload()
    this.router.navigateByUrl('/signin')
  }

}
