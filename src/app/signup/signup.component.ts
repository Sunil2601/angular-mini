import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup | undefined;

  constructor(private fb: FormBuilder,private userService:UserService,private router :Router) {

  }
  ngOnInit() {
    this.signupform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit(): void {
    console.log(this.signupform?.value)
    this.userService.signUpUser(this.signupform?.value)
    this.signupform?.reset;
    this.router.navigate(['login'])
  }
}
