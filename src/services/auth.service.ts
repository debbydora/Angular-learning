import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser!: any;
  constructor(
    private dbService: NgxIndexedDBService,
    private route: Router
    
    ) { }


    register(user: User): any{
        this.dbService.add('users',{
            FirstName: user.FirstName,
            LastName: user.LastName,
            PhoneNumber: user.PhoneNumber,
            Email: user.Email,
            Password: user.Password
        }).subscribe( {
           next: result => {
             this.route.navigate(["auth/login"])
             console.log(result)
            },
            error: error => {
                console.log(error)
            }
        })

    }




    login(user: User){
        this.dbService.getByIndex('users', 'Email', user.Email)
        .subscribe({
            next : result => {
               this.currentUser = result
               if(this.currentUser && this.currentUser.Password === user.Password) {
                 localStorage.setItem("token","12345")
                this.route.navigate(["home"])
            }
            },
            error: error => {
              console.log(error)
            }
        })
    
    }

   
  }


 