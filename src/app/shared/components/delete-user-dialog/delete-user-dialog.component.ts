import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: false,
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.css'
})
export class DeleteUserDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string, action: string},){

  }



  //funcion para mostrar diferentes mensajes
  getMessage(): string {
  if (this.data.action === 'delete-user') {
    return 'Esta acción eliminará al usuario de forma permanente.';
  } else if (this.data.action === 'delete-file') {
    return 'Esto eliminará el archivo que subiste.';
  } else {
    return '¿Estás seguro de continuar con esta acción?';
  }
}
  
}
