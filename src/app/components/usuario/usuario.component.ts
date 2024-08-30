import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UsuarioModule } from '../../models/usuario/usuario.module';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  user!: UsuarioModule; // Armazena os dados do usuário

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.user = this.authService.getUserDetails();
  }

  onLogout(): void {
    this.authService.logout();
  }

}
