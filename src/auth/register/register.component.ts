import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'blog';
  signupForm!: FormGroup;



  constructor( 
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  
     ) { }


  ngOnInit(): void {

    // Welcome Form Initialized
    this.signupForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName:['', Validators.required],
      PhoneNumber:['', [Validators.required,Validators.pattern("\d{11}")]],
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(4)]], 
      })
      
    
      }


      save(){   
        if(this.signupForm.untouched) {
          return 
        }
       this.authService.register(this.signupForm.value);
      }
  }
