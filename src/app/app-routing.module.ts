import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './dashboard/test/test.component';
import { UsersComponent } from './dashboard/users/users.component';
import { UploadFilesComponent } from './dashboard/upload-files/upload-files.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard/test', component: TestComponent },
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/upload-files', component: UploadFilesComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
