import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-test-reports',
  standalone: false,
  templateUrl: './test-reports.component.html',
  styleUrl: './test-reports.component.css'
})
export class TestReportsComponent{


  constructor(private route: Router, private dialog: MatDialog){

  }

  displayedColumns: string[] = ['no', 'name', 'folio', 'nombre-razon-social', 'fecha', 'acciones'];

  dataSource = [
    { no: 1, name: 'FOLAB-03J', folio: 'FOL123', nombreRazonSocial: 'Empresa Unic', fecha: '2024-06-04' },
    { no: 2, name: 'FOLAB-88H', folio: 'FOL124', nombreRazonSocial: 'Empresa Unic', fecha: '2024-06-03' },
    { no: 3, name: 'FOLAB-23J', folio: 'FOL125', nombreRazonSocial: 'Empresa Unic', fecha: '2024-06-01' }
  ];


  goUploadFile(){
    this.route.navigate(['/dashboard/upload-files']);
  }

  openDialog() {
  this.dialog.open(ConfirmDeleteDialogComponent, {
    width: '800px',
  });
}
}