import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;
  loggedInUser: undefined;


  constructor(private router: Router) {

  }

  signUpUser(user: any) {
    let localStorageItem = localStorage.getItem('users') || "[]";
    let users = JSON.parse(localStorageItem);
    let temp = users.filter((ele: { email: any; }) => ele.email == user.email)
    if (temp.length > 0) {
      alert('user already exists!, choose another email')
    }
    else if (temp.length == 0) {
      let tempUserObj = { ...user, favourites: [] };
      users.push(tempUserObj);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Sign Up Successful')
    }
    else {
      alert('Something went wrong')
    }
  }


  loginUser(userDetails: any) {
    let localStorageItem = localStorage.getItem('users') || "[]";
    let users = JSON.parse(localStorageItem);
    let idx = users.findIndex((ele: { email: any; }) => ele.email == userDetails.email)
    console.log("idx", idx);
    if (idx == -1) {
      alert('User with ' + userDetails.email + " not exists")
    }
    else {
      if (users[idx].password == userDetails.password) {
        this.isLoggedIn = true;
        this.loggedInUser = users[idx];
        alert('Login Successful')
        this.router.navigate([''])
      }
      else
        alert('Wrong Password')
    }
  }

  isUserLoggenIn(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUserDetails(): any {
    return this.loggedInUser
  }

  
  logoutUser() {
    this.isLoggedIn = false;
    this.loggedInUser = undefined;
    this.router.navigate([''])
  }
}
