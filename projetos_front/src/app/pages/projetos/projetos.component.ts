import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ProjetoModel } from 'src/app/models/ProjetoModel';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.sass']
})
export class ProjetosComponent implements OnInit {
  projetos: Array<ProjetoModel> = [];

  constructor(private _dialog: MatDialog, private _projetosService: ProjetosService, private _router: Router) { }

  delete(projeto) {
    this._projetosService.deleteProjeto(projeto).subscribe(res => {
      this.projetos = this.projetos.filter(proj => proj.id != projeto.id)
    })
  }

  updateProjeto(projeto: ProjetoModel) {
    this._router.navigate([RoutePaths.Projetos, projeto.id])
  }

  ngOnInit() {
    this._projetosService.getAllProjetos().subscribe(projetos => {
      this.projetos = projetos;
    })
  }
}
