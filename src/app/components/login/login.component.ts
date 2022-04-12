import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
      this.form = this.fb.group({
        usuario: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == "admin" && password == "admin") {
      //Mostramos un dashboard
      this.fakeLoading();
      this.loading = true;
    } else {
      // Mostramos un mensaje de error
      this.error();
      //Metodo para que se reinicie los campos en rojo como incorrectos
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o Contraseña ingresado son incorrectos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  //Metodo que despues que hace que el spin de carga se muestre durante 1,5 s y despues te carga la ruta del Dashboard si el login es correcto.
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }

  registroUsuario() {
      this.router.navigate(['registro']);
  }

}
