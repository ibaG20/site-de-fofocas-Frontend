import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostagemModule } from '../../models/postagem/postagem.module';
import { UsuarioModule } from '../../models/usuario/usuario.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  postagens = [
    {
      id: 1,
      titulo: 'Primeira Postagem',
      conteudo: 'Este é o conteúdo da primeira postagem.',
      autor: 'Gab',
      data: '2024-09-01'
    },
    {
      id: 2,
      titulo: 'Segunda Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 3,
      titulo: 'Terceira Postagem',
      conteudo: 'Este é o conteúdo da terceira postagem. Este é o conteúdo da terceira postagem.Este é o conteúdo da terceira postagem.Este é o conteúdo da terceira postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 4,
      titulo: 'Quarta Postagem',
      conteudo: 'Este é o conteúdo da quarta postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 5,
      titulo: 'Quinta Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 6,
      titulo: 'Sexta Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 7,
      titulo: 'Setima Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 8,
      titulo: 'Oitava Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 9,
      titulo: 'Setima1 Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
    {
      id: 10,
      titulo: 'Setima2 Postagem',
      conteudo: 'Este é o conteúdo da segunda postagem.',
      autor: 'Maria Souza',
      data: '2024-09-02'
    },
  ];

  constructor() { }
}
