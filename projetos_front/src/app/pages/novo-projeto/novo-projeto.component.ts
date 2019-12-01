import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProjetosService } from 'src/app/services/projetos.service';
import { RoutePaths } from 'src/app/app-routing.module';
import { ProjetoModel } from 'src/app/models/ProjetoModel';

@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.sass']
})
export class NovoProjetoComponent implements OnInit {
  projeto: ProjetoModel = {
    id: null,
    fim: '',
    inicio: '',
    nome: '',
    valor: 0,
  }

  createProjeto(projeto: ProjetoModel) {
    // @ts-ignore
    projeto.inicio = projeto.inicio.format('L');
    // @ts-ignore
    projeto.fim = projeto.fim.format('L');
    this._projetosService.createProjeto(projeto).subscribe(res => {
      this._router.navigate([RoutePaths.Projetos]);
    }, err => {
      this._snackBar.open('Falha ao criar projeto', '', { panelClass: ['snack-danger'] });
    })
  }

  constructor(private _projetosService: ProjetosService, private _router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
