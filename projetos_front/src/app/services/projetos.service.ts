import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProjetoModel } from '../models/ProjetoModel';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  private projetosUrl = `${environment.apiUrl}/projetos`
  constructor(private http: HttpClient) { }

  getAllProjetos(): Observable<Array<ProjetoModel>> {
    return this.http.get(this.projetosUrl).pipe(
      map(resp => resp['_embedded']['projetos'])
    ) as Observable<Array<ProjetoModel>>;
  }

  getProjeto(id: string): Observable<ProjetoModel> {
    return this.http.get(this.projetosUrl, { params: { id } }).pipe(
      map(resp => resp['_embedded']['projetos'][0])
    ) as Observable<ProjetoModel>;
  }

  createProjeto(projeto: ProjetoModel) {
    return this.http.post(this.projetosUrl, projeto);
  }

  updateProjeto(projeto: ProjetoModel) {
    return this.http.put(`${this.projetosUrl}/${projeto.id}`, projeto);
  }

  deleteProjeto(projeto: ProjetoModel){
    return this.http.delete(`${this.projetosUrl}/${projeto.id}`);
  }

  // buscaRegistrosAtivos(): Observable<Array<ProjetoModel>> {
  //   return this.http.get(`${environment.apiUrl}/registros`) as Observable<Array<ProjetoModel>>;
  // }

  // buscaValorSaida(placa: string): Observable<number> {
  //   return this.http.get(`${environment.apiUrl}/registros/saida`, { params: { placa } }) as Observable<number>;
  // }

  // registrarVeiculo(veiculo: ProjetoModel) {
  //   return this.http.post(`${environment.apiUrl}/registros`, veiculo);
  // }

  // registrarSaidaVeiculo(placa: string) {
  //   return this.http.post(`${environment.apiUrl}/registros/saida`, {}, { params: { placa } })
  //     .pipe(
  //       tap(() => this.placaSubject.next(placa))
  //     )
  // }

  // buscaRelatorio(inicio: string, fim: string): Observable<Array<RelatorioModel>> {
  //   return this.http.get(`${environment.apiUrl}/registros/relatorio`, { params: { inicio, fim } }) as Observable<Array<RelatorioModel>>;
  // }

  // listenSaidaVeiculo(): Observable<string> {
  //   return this.placaData;
  // }
}
