import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';

  @Component({
   selector: 'metas',
   templateUrl: './metas.component.html',
   styleUrls: ['./metas.component.css']
 })
 export class MetasComponent implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[] = [];

    atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno).subscribe({
        next: (a) => {
          if (a == null) {
            alert("Unexpected fatal error trying to update student information! Please contact the systems administrators.");
          }
        },
        error: (msg) => {
          alert(msg.message);
        }
      });
    }

    ngOnInit(): void {
      this.alunoService.getAlunos()
      .subscribe({
        next: (as) => { this.alunos = as; },
        error: (err) => { alert(err.message); }
      });
    }


  }