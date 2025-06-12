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
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';
import { BottomSheetPhotoComponent } from './components/bottom-sheet-photo/bottom-sheet-photo.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
 declarations: [SidebarComponent, ButtonsBelowComponent, ConfirmDeleteDialogComponent, CreateEditDialogComponent, DeleteUserDialogComponent, BottomSheetPhotoComponent, SpinnerLoadingComponent],
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
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SidebarComponent, 
    ButtonsBelowComponent,
    SpinnerLoadingComponent
  ]
})
export class SharedModule { }
