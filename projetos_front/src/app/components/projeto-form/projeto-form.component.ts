import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjetoModel } from 'src/app/models/ProjetoModel';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.sass']
})
export class ProjetoFormComponent implements OnInit {
  @Input()
  projeto: ProjetoModel
  @Output()
  formSubmit: EventEmitter<ProjetoModel> =  new EventEmitter();

  constructor() { }

  onSubmit() {
    this.formSubmit.emit(this.projeto);
  }

  ngOnInit() {
  }

}
