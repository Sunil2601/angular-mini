import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchForm = new FormGroup({
    searchString: new FormControl('')
  });
  constructor(private artsService: ArtsService) {
    this.searchForm.get('searchString')!.valueChanges.subscribe((newValue) => {
      this.artsService.getDataOnSearch(newValue||"")
    });
  }
  onSearch() {
    this.artsService.getDataOnSearch(this.searchForm.value["searchString"]||"")
  }
}
