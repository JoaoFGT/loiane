import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit{

  protected usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

}
