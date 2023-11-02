import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-view-art-by-id',
  templateUrl: './view-art-by-id.component.html',
  styleUrls: ['./view-art-by-id.component.css']
})
export class ViewArtByIdComponent implements OnInit {
  panelOpenState = false;
  artID: string | undefined;
  constructor(private route: ActivatedRoute, private artService: ArtsService) {
    this.route.params.subscribe(params => {
      this.artID = params['id'];
      this.artService.getArtByIdApi(this.artID)
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.artID = params['id'];
      this.artService.getArtByIdApi(this.artID)
    });
    
  }

  getArtDataById() {
    return [this.artService.getArtById()];
  }
  getImageURL(): string {
    return "https://www.artic.edu/iiif/2/" + this.getArtDataById()[0]?.image_id + "/full/843,/0/default.jpg";
  }

  getApiReqStatus(): boolean {
    return this.artService.getApiReqStatus();
  }
}
