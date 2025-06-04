import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { SharedModule } from '../shared/shared.module';
import { TestReportsComponent } from './test-reports/test-reports.component';
import { AccountComponent } from './account/account.component';



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
    SharedModule
  ]
})
export class DashboardModule { }
