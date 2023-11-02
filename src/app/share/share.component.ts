import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  constructor(public dialogRef: MatDialogRef<ShareComponent>) {

  }
  closeDialog() {
    this.dialogRef.close();
  }
}
