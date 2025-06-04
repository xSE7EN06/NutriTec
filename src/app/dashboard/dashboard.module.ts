import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TestComponent,
    UsersComponent,
    UploadFilesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
