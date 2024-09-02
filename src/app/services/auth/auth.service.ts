import { Injectable } from '@angular/core';
import { Role, UsuarioModule } from '../../models/usuario/usuario.module';
import { PostagemModule } from '../../models/postagem/postagem.module';
import { ComentarioModule } from '../../models/comentario/comentario.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private mockUser: UsuarioModule = {
    id: 1,
    email: 'gab@email.com',
    nome: 'Gab',
    bio: 'Esse usuário da Gab é um mock, e eu to com fome.',
    role: Role.User,
    senha: '1234',
    postagens: [], // Usar um array em vez de instanciar diretamente
    comentarios: [] // Usar um array
  };

  constructor(private router: Router) { }

  login(email: string, senha: string): boolean{
    if(email === this.mockUser.email && senha === this.mockUser.senha){
      this.isAuthenticated = true;
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): Role{
    return this.mockUser.role;
  }
  isAdmin(): boolean {
    return this.getUserRole() === Role.Admin;
  }
  isUser(): boolean {
    return this.getUserRole() === Role.User;
  }

  getUserDetails(): UsuarioModule{
    return this.mockUser;
  }

}
