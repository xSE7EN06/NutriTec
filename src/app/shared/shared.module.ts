import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonsBelowComponent } from './components/buttons-below/buttons-below.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CreateEditDialogComponent } from './components/create-edit-dialog/create-edit-dialog.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
 declarations: [SidebarComponent, ButtonsBelowComponent, ConfirmDeleteDialogComponent, CreateEditDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule
  ],
  exports: [
    SidebarComponent, 
    ButtonsBelowComponent
  ]
})
export class SharedModule { }
