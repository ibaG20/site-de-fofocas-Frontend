import { Component } from '@angular/core';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { HomeComponent } from '../../home/home.component';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showNavbar = true;

  constructor(private router: Router) {
    // Esconde a navbar se a rota atual for a página de login ou criar conta
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Verifica se a URL atual é '/login' ou '/criar-conta'
        const hiddenRoutes = ['/login', '/criar-conta'];
        this.showNavbar = !hiddenRoutes.includes(event.url);
      }
    });
  }
}
