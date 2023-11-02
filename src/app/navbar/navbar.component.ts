import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../arts.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  searchForm = new FormControl();
  name=""

  constructor(private userService: UserService,private route:ActivatedRoute,private artService:ArtsService) { }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getLoginStatus(): boolean {
    if(this.userService.isUserLoggenIn()){
      this.name=this.userService.getLoggedInUserDetails().name;
      return true;
    }
    return false;
  }

  onLogout() {
    this.userService.logoutUser()
  }

  getRoute():string{
    return this.route.snapshot.url.join('/');
  }

  getFavouritesCount():number{
    console.log(this.artService.getFavouritesCount())
    return this.artService.getFavouritesCount();
  }
}
