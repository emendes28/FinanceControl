import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Despesa } from './models/despesa';

@Injectable()
export class DataService {

  private despesas = new BehaviorSubject<Array<Despesa>>([]);
  private countDespesas = new BehaviorSubject<number>(0);
  despesa = this.despesas.asObservable();
  qtd = this.countDespesas.asObservable();

  constructor() { }

  alterarDespesa(despesa){
    this.despesas.next(despesa);
  }

  alterarContagem(qtd){
    this.countDespesas.next(qtd);
  }
}
