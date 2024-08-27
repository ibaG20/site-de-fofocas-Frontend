import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemModule } from '../postagem/postagem.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoriaModule {
  id: number = 0;
  name: string = '';
  postagens: PostagemModule = new PostagemModule();
 }

