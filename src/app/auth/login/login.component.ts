import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading = false;

  //para validar correos y contraseñas
  private readonly correoPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|utcv\.edu\.mx)$/;
  private readonly passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  loginForm !: FormGroup;
  
  constructor(private route: Router, private fb: FormBuilder) {
    this.validarForm();
  }

  //validar formulario o inputs correo y password
  private validarForm(): void{
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern(this.correoPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
  }

  onLogin(){
    if(this.loginForm.valid){
      this.isLoading = true;
    
      setTimeout(() => {
      this.isLoading = false;
      this.route.navigate(['/dashboard/upload-files']);
    }, 2000);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
