import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-criar-post',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, NgFor],
  templateUrl: './criar-post.component.html',
  styleUrl: './criar-post.component.css'
})

export class CriarPostComponent {
  selectedCategories: Set<string> = new Set(); // Armazena as categorias selecionadas

  categories: string[] = [
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
    'Categoria 4',
    'Categoria 5',
    'Categoria 6'
  ]; // Lista de categorias

  // Retorna no máximo 5 categorias
 /*  get limitedCategories(): string[] {
    return this.categories.slice(0, 5);
  } */

  toggleCategory(category: string): void {
    if (this.selectedCategories.size < 5){
      this.selectedCategories.add(category);
    }
    /* if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category); // Remove a categoria se já estiver selecionada
    } else {
    } */
  }

  get selectedCategoriesList(): string[] {
    return Array.from(this.selectedCategories); // Converte o Set em array para exibição
  }
}
