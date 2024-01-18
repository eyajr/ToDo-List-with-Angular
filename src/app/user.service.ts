import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { map, filter } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) { }

  btnSignValue:string=''

  getUser(login:string, password:string):Observable<User[]>{

    let params= new HttpParams()
    .set("login",login)
    .set("password",password)

    return this.HttpClient.get<User[]>('http://localhost:3000/users',{params})

    //return this.HttpClient.get<User[]>('http://localhost:3000/users').pipe(
      //map(users=>users.filter(user=>user.login===login&&users.password===password))

  }



  }

