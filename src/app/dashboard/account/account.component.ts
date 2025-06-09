import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditDialogComponent } from '../../shared/components/create-edit-dialog/create-edit-dialog.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetPhotoComponent } from '../../shared/components/bottom-sheet-photo/bottom-sheet-photo.component';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  private bottomSheet = inject(MatBottomSheet);


  constructor(private dialog: MatDialog){

  }

  openDialog(modo: 'crear' | 'editar') {
      const dialogRef = this.dialog.open(CreateEditDialogComponent, {
        width: '90%',
        maxWidth: '1000px',
        minWidth: '900px',
        maxHeight: '100vh',
        position: { top: '50px' },
        panelClass: 'custom-dialog-container',
        disableClose: false,
        autoFocus: false,
        data:{
          modo: modo
        }
      });
  
       dialogRef.afterClosed().subscribe(result => {
        console.log('The patient dialog was closed');
        // La recarga se maneja a través de la suscripción al servicio
      });
    }

   openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetPhotoComponent);
  }
}
