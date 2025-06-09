import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-photo',
  standalone: false,
  templateUrl: './bottom-sheet-photo.component.html',
  styleUrl: './bottom-sheet-photo.component.css'
})
export class BottomSheetPhotoComponent {
  private bottomSheetRef =
   inject<MatBottomSheetRef<BottomSheetPhotoComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
