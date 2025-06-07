import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateEditDialogComponent } from '../../shared/components/create-edit-dialog/create-edit-dialog.component';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private route: Router, private dialog: MatDialog) {

  }

  displayedColumns: string[] = ['no', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'correo', 'telefono', 'acciones'];

  dataSource = [
    {
      no: 1,
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'Gómez',
      correo: 'juan.perez@example.com',
      telefono: '555-123-4567'
    },
    {
      no: 2,
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Martínez',
      correo: 'maria.lopez@example.com',
      telefono: '555-234-5678'
    },
    {
      no: 3,
      nombre: 'Carlos',
      apellidoPaterno: 'Ramírez',
      apellidoMaterno: 'Hernández',
      correo: 'carlos.ramirez@example.com',
      telefono: '555-345-6789'
    }
  ];

  openDialog() {
    const dialogRef = this.dialog.open(CreateEditDialogComponent, {
      width: '90%',
      maxWidth: '1000px',
      minWidth: '900px',
      maxHeight: '100vh',
      position: { top: '50px' },
      panelClass: 'custom-dialog-container',
      disableClose: false,
      autoFocus: false,
    });

     dialogRef.afterClosed().subscribe(result => {
      console.log('The patient dialog was closed');
      // La recarga se maneja a través de la suscripción al servicio
    });
  }
}
