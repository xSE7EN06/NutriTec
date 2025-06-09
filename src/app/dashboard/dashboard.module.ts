import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { SharedModule } from '../shared/shared.module';
import { TestReportsComponent } from './test-reports/test-reports.component';
import { AccountComponent } from './account/account.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TestComponent,
    UsersComponent,
    UploadFilesComponent,
    TestReportsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class DashboardModule { }
