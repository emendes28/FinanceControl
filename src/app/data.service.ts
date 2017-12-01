import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Despesa } from './models/despesa';
import { IndexedDBAngular } from 'indexeddb-angular';

@Injectable()
export class DataService {

  private db = new IndexedDBAngular('meusGastos', 1);
  private despesas = new BehaviorSubject<Array<Despesa>>([]);
  private countDespesas = new BehaviorSubject<number>(0);
  despesa = this.despesas.asObservable();
  qtd = this.countDespesas.asObservable();

  constructor() {
    
    this.db.createStore(1, this.createCollections) 
  }

  createCollections(db) {
    db.currentTarget.result.createObjectStore('despesas');
  }
  alterarDespesa(despesa) {
    this.despesas.next(despesa);

  }

  alterarContagem(qtd) {
    this.countDespesas.next(qtd);
  }

  salveDespesa(despesa): Boolean {
    this.db.add('despesas',despesa,this.despesas.value.length+1).then(() => {
      console.log(despesa);
      return true;
    }, (error) => {
      console.log(error);
    });
    return false;
  }

  buscarDespesas(): BehaviorSubject<Array<Despesa>> {
    this.db.getAll('despesas').then((despesas) => {
      this.despesas = despesas;
      return despesas;
    }, (error) => {
      console.log(error);
    });
    return new BehaviorSubject<Array<Despesa>>([]);
  }

  excluirDespesa(despesa): Boolean {
    this.db.delete('despesas', despesa.id).then(() => {
      return true;
    }, (error) => {
      console.log(error);
    });
    return false;
  }
}
