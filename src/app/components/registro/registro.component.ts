import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  listaUsuarios = new Array();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });

    interface User {
      nombre:string,
      apellidos:string, 
      usuario:string,
      password:string
    }
  }

  ngOnInit(): void {

  }

  inicio() {
      this.router.navigate(['login']);
  }

  bdd_Usuarios(listaUsuarios: String){
    
    
    //let regUsuario:[nombre:string, apellidos:string, usuario:string, password:string] = [this.form.value.nombre, this.form.value.apellidos, this.form.value.usuario, this.form.value.password];
    let regUser: User = {
      nombre : this.form.value.nombre,
      apellidos: this.form.value.apellidos, 
      usuario: this.form.value.usuario,
      password: this.form.value.password
    }

    listaUsuarios.push(regUser);

    console.log(listaUsuarios);
    
  }


}
