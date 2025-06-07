import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-dialog',
  standalone: false,
  templateUrl: './create-edit-dialog.component.html',
  styleUrl: './create-edit-dialog.component.css'
})
export class CreateEditDialogComponent {

  constructor(private dialogRef: MatDialogRef<CreateEditDialogComponent>){

  }
  
  closeDialog(){
    this.dialogRef.close();
  }
}
