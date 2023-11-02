import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtByIdComponent } from './view-art-by-id.component';

describe('ViewArtByIdComponent', () => {
  let component: ViewArtByIdComponent;
  let fixture: ComponentFixture<ViewArtByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArtByIdComponent]
    });
    fixture = TestBed.createComponent(ViewArtByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
