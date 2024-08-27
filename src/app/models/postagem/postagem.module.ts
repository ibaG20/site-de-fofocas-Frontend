import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { CategoriaModule } from '../categoria/categoria.module';
import { ComentarioModule } from '../comentario/comentario.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostagemModule {
  id: number = 0;
  dataPostagem: Date = new Date();
  dataAtualizacao: Date = new Date();
  titulo: string = '';
  conteudo: string = '';
  autor: UsuarioModule = new UsuarioModule();
  userId: number = 0;
  Categorias: CategoriaModule = new CategoriaModule();
  Comentario: ComentarioModule = new ComentarioModule();
 }