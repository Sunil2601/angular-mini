import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ArtsService } from '../arts.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShareComponent } from '../share/share.component';


@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent {
  isExpanded: boolean[] = [];
  constructor(private artsService: ArtsService, private router: Router, public dialog: MatDialog) {
    const pageIndex = 0;
    const limit = 20;
    this.artsService.getDatafromApi(pageIndex, limit);
    for (let i = 0; i < limit; i++)this.isExpanded.push(false)
    this.artsService.initializeQuery();
  }

  onChange(event: PageEvent) {
    const pageIndex = event.pageIndex;
    const limit = event.pageSize;
    this.artsService.getDatafromApi(pageIndex, limit);
    for (let i = 0; i < limit; i++)this.isExpanded.push(false)
  }

  getArtsData(colNo: number): any[] {
    let data = this.artsService.getDataFromService();
    let n = Math.floor(data.length / 4);
    return data.slice((colNo - 1) * n, colNo * n)
  }

  getIamgeURL(art: any): string {
    return "https://www.artic.edu/iiif/2/" + art.image_id + "/full/843,/0/default.jpg";
  }

  onView(id: number): void {
    let route = "/viewart/" + id.toString();
    this.router.navigate([route])
  }
  onAddToFavourites(art: any): void {
    if (this.artsService.isAFavourite(art)) {
      this.artsService.onRemoveFromFavorites(art);
    }
    else {
      this.artsService.onAddToFavourites(art);
    }

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


  getApiReqStatus(): boolean {
    console.log(this.artsService.getApiReqStatus());
    return this.artsService.getApiReqStatus();
  }

  isAFavourite(art: any): boolean {
    return this.artsService.isAFavourite(art);
  }


  expandImage(idx: number) {
    this.isExpanded[idx] = true;
  }

  shrinkImage(idx: number) {
    this.isExpanded[idx] = false;
    console.log("shrink image ")
  }

}
