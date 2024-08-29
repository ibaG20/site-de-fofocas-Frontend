import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemModule } from '../postagem/postagem.module';
import { ComentarioModule } from '../comentario/comentario.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class UsuarioModule { 
  id: number = 0
  email: string = '';
  nome: string = '';
  bio: string = '';
  role: Role = Role.User; 
  senha: string = '';
  postagens: PostagemModule = new PostagemModule();
  comentarios: ComentarioModule = new ComentarioModule();
}
export enum Role {
  Admin = 'admin',
  User = 'user',
}