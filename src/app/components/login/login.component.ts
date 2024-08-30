import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessege: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    if(!this.authService.login(this.email, this.senha)) {
      this.errorMessege = 'Escreveu errado ai, bota dnv';
    }
  }
}
