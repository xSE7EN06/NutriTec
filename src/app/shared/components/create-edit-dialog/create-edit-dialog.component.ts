import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-dialog',
  standalone: false,
  templateUrl: './create-edit-dialog.component.html',
  styleUrl: './create-edit-dialog.component.css'
})
export class CreateEditDialogComponent {

  

  constructor(private dialogRef: MatDialogRef<CreateEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

  }
  
  closeDialog(){
    this.dialogRef.close();
  }
}
