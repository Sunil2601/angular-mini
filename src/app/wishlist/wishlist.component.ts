import { Component } from '@angular/core';
import { ArtsComponent } from '../arts/arts.component';
import { ArtsService } from '../arts.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ShareComponent } from '../share/share.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  favouriteArts: any = [];
  isLoggedIn = false;
  constructor(private artService: ArtsService, private route: Router, public dialog: MatDialog, private userService: UserService) {
    if (this.userService.isUserLoggenIn()) {
      this.isLoggedIn = true;
      let loggedInUser = this.userService.getLoggedInUserDetails();
      this.favouriteArts = loggedInUser.favourites
    }
  }
  getFavouritesData() {
    return this.favouriteArts
  }

  onRemoveFromFavourites(art: any): void {
    this.artService.onRemoveFromFavorites(art);
    let favouriteArts = this.userService.getLoggedInUserDetails().favourites;
  }
  onShare(id: number): void {
    navigator.share({
      title: "Checkout",
      text: "Check this art",
      url: `${window.location.origin}/viewart/${id}`
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShareComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onView(id: number) {
    let temp = "viewart/" + id.toString();
    this.route.navigate([temp]);
  }

  getIamgeURL(art: any): string {
    return "https://www.artic.edu/iiif/2/" + art.image_id + "/full/843,/0/default.jpg";
  }

  onChange(event: PageEvent) {
    const pageIndex = event.pageIndex;
    const limit = event.pageSize;
    this.artService.getDatafromApi(pageIndex, limit);
  }

  isAFavourite(art: any): boolean {
    return this.artService.isAFavourite(art);
  }

  onClick() {
    this.route.navigate([""])
  }
  getLength(): number {
    return this.favouriteArts.length;

  }
}
function getFavouritesData() {
  throw new Error('Function not implemented.');
}

