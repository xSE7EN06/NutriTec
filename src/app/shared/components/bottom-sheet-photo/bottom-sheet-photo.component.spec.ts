import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetPhotoComponent } from './bottom-sheet-photo.component';

describe('BottomSheetPhotoComponent', () => {
  let component: BottomSheetPhotoComponent;
  let fixture: ComponentFixture<BottomSheetPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomSheetPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
