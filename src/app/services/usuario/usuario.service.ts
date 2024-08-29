import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModule } from '../../models/usuario/usuario.module';
import { Observable, of, tap } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = '';

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  logar(usuario: UsuarioModule): Observable<any> {
    /*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
      tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
        localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));
        this.router.navigate(['']);
      }));*/
    return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
      if (!resposta.sucesso) return;
      localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
      localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
      this.router.navigate(['']);
    }));
  }
  private mockUsuarioLogin(usuario: UsuarioModule): Observable<any> {
    var retornoMock: any = [];
    if (usuario.email === "email@email.com" && usuario.senha == "123") {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  /* get obterUsuarioLogado(): UsuarioModule {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario')))
      : null;
  }
  get obterIdUsuarioLogado(): string {
    return localStorage.getItem('usuario')
      ? (JSON.parse(atob(localStorage.getItem('usuario'))) as UsuarioModule).id
      : null;
  }
  get obterTokenUsuario(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')))
      : null;
  }
  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  } */
}
