import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ProjetoModel } from 'src/app/models/ProjetoModel';
import { RoutePaths } from 'src/app/app-routing.module';
import * as moment from 'moment';

@Component({
  selector: 'app-update-projeto',
  templateUrl: './update-projeto.component.html',
  styleUrls: ['./update-projeto.component.sass']
})
export class UpdateProjetoComponent implements OnInit {
  projeto: ProjetoModel;
  titulo;

  constructor(private route: ActivatedRoute, private _projetosService: ProjetosService, private _router: Router) { }

  updateProjeto(projeto: ProjetoModel) {
    // @ts-ignore
    projeto.inicio = projeto.inicio.format('DD/MM/YYYY');
    // @ts-ignore
    projeto.fim = projeto.fim.format('DD/MM/YYYY');
    this._projetosService.updateProjeto(projeto).subscribe( res => {
      this._router.navigate([RoutePaths.Projetos])
    })
  }

  ngOnInit() {
    this.route.params.pipe(
      flatMap(params => this._projetosService.getProjeto(params['id']))
    ).subscribe(projeto => {
      // @ts-ignore
      projeto.inicio = moment(projeto.inicio, 'DD/MM/YYYY');
      // @ts-ignore
      projeto.fim = moment(projeto.fim, 'DD/MM/YYYY');
      this.projeto = projeto;
      this.titulo = projeto.nome;
    })
  }

}
