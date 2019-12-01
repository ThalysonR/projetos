import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjetoModel } from 'src/app/models/ProjetoModel';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.sass']
})
export class ProjetoCardComponent implements OnInit {
  @Input()
  projeto: ProjetoModel;
  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
