import { Injectable } from '@angular/core';
import { Livro } from './livro';  

@Injectable({
  providedIn: 'root',
})  
export class ControleLivrosService {
   livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Use a cabeça: Java', resumo: 'Uma experiência de aprendizado em Java.', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java: Como programar', resumo: 'Referência completa para programadores Java.', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core Java for the impatient', resumo: 'Guia conciso para as novidades do Java Moderno', autores: ['Cay Horstmann'] }
    ];

    obterLivros(): Livro[] {
      return this.livros;
    }
    incluir(livro: Livro): void {
      const maxCodigo = this.livros.reduce((max, l) => l.codigo > max ? l.codigo : max, 0); 
      livro.codigo = maxCodigo + 1;
      this.livros.push(livro);
    }
    excluir(codigo: number): void {
      const index = this.livros.findIndex(l => l.codigo === codigo);
      if (index !== -1) { this.livros.splice(index, 1);
      }
    }
  }
 

