import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editora } from '../editora';
import {Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service'; 

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
  })
export class LivroListaComponent 
implements OnInit {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  constructor( 
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService 
  ) { }

ngOnInit(): void {
  this.editoras = this.servEditora.getEditoras();
  this.livros = this.servLivros.obterLivros();
  }
obterNome = (codEditora: number): string | undefined => { 
  return this.servEditora.getNomeEditora(codEditora);
  }
excluir = (codigo: number): void => { this.servLivros.excluir(codigo);
  this.livros = this.servLivros.obterLivros();
}
} 