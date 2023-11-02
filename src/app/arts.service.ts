import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {
  data: any = [];
  apiReqStatus: boolean = false;
  artById: any;
  query = "";

  constructor(private http: HttpClient, private userService: UserService) {
  }

  getDatafromApi(pageNo: number = 1, limit: number = 20) {
    this.apiReqStatus = false;
    const apiUrl = `https://api.artic.edu/api/v1/artworks/search?fields=image_id,id,title,date_start,artist_title&q=${this.query}&page=${pageNo}&limit=${limit}`;
    this.http.get<any>(apiUrl).subscribe(response => {
      this.data = response.data
      this.apiReqStatus = true;
    });
  }
  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }

  getDataFromService(): any[] {
    return this.data;
  }

  onAddToFavourites(art: any): void {
    if (!this.userService.isUserLoggenIn()) { alert('Login to Add Favourites') }
    else {
      let localStorageItem = localStorage.getItem('users') || "";
      let allUsers = JSON.parse(localStorageItem)
      let loggedInUser = this.userService.getLoggedInUserDetails();
      let favouriteArts = loggedInUser.favourites
      let temp = favouriteArts.filter((ele: any) => ele.id == art.id);
      if (temp.length == 0) {
        favouriteArts.push(art);
        let idx = allUsers.findIndex((ele: { email: any; }) => ele.email == loggedInUser.email)
        loggedInUser.favourites = favouriteArts;
        allUsers[idx] = loggedInUser;
        localStorage.setItem('users', JSON.stringify(allUsers));
      }
      else {
        alert('something went wrong')
      }
    }
  }
  getFavouritesCount(): number {
    if (!this.userService.isUserLoggenIn()) { return 0;}
    else {
      let loggedInUser = this.userService.getLoggedInUserDetails();
      let favouriteArts = loggedInUser.favourites
      return favouriteArts.length;
    }
  }

  onRemoveFromFavorites(art: any): void {
    if (!this.userService.isUserLoggenIn()) { alert('Login to Add or Remove Favourites') }
    else {
      let localStorageItem = localStorage.getItem('users') || "";
      let allUsers = JSON.parse(localStorageItem)
      let loggedInUser = this.userService.getLoggedInUserDetails();
      let favouriteArts = loggedInUser.favourites
      let idx = favouriteArts.findIndex((ele: any) => ele.id == art.id);
      if (idx >= 0) {
        favouriteArts.splice(idx, 1);
        loggedInUser.favourites = favouriteArts;
        allUsers[idx] = loggedInUser;
        localStorage.setItem('users', JSON.stringify(allUsers));
      }
      else {
        alert('something went wrong')
      }
    }
  }

  isAFavourite(art: any): boolean {
    if (this.userService.isUserLoggenIn()) {
      let localStorageItem = localStorage.getItem('users') || "";
      let allUsers = JSON.parse(localStorageItem)
      let loggedInUser = this.userService.getLoggedInUserDetails();
      let favouriteArts = loggedInUser.favourites
      let idx = favouriteArts.findIndex((ele: any) => ele.id == art.id);
      return idx >= 0;
    }
    return false;
  }

  getArtByIdApi(id: string | any): void {
    let apiURL = "https://api.artic.edu/api/v1/artworks/" + id;
    this.apiReqStatus = false
    this.http.get<any>(apiURL).subscribe(response => {
      this.artById = response.data
      this.apiReqStatus = true;
    })
  }

  getArtById(): any {
    return this.artById;
  }

  getDataOnSearch(query: string): void {
    this.query = query;
    this.getDatafromApi();
  }

  initializeQuery() {
    this.query = "";
    this.getDatafromApi();
  }


}
