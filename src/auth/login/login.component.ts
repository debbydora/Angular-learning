import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';



@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'blog';
  loginForm!: FormGroup


  constructor( 
    private fb: FormBuilder,
    private authService: AuthService
  
     ) { 
     }
  
  
  ngOnInit(): void {
  
    // Welcome Form Initialized
    this.loginForm = this.fb.group({
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(4)]], 
      })
      
    
      }
  
  
      save(){
          // console.log(this.signupForm)
          this.authService.login(this.loginForm.value)
      }
  }



















