import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Despesa } from './models/despesa';

@Injectable()
export class DataService {

  private DBOpenRequest = self.indexedDB.open('meusGastos', 2);
  private despesas = new BehaviorSubject<Array<Despesa>>([]);
  private countDespesas = new BehaviorSubject<number>(0);
  private db: any = self.indexedDB.open("meusGastos", 2);
  despesa = this.despesas.asObservable();
  qtd = this.countDespesas.asObservable();

  constructor() {
    this.openDB();
  }

  alterarDespesa(despesa) {
    this.despesas.next(despesa);
  }

  alterarContagem(qtd) {
    this.countDespesas.next(qtd);
  }

  salveDespesa(despesa): Boolean {
    const request = this.db;
    request.onsuccess = (event) => {
      this.db = event.request;
    };
    const requestAdd = this.db.transaction("cliente")
      .objectStore("cliente").add(despesa, this.despesas.value.length + 1);
    return this.Tratativa(requestAdd, despesa);
  }

  private Tratativa(requestAdd: IDBRequest, despesa: any): Boolean {
    requestAdd.onsuccess = (ev) => {
      console.log(`${ev} - ${despesa}`);
      return true;
    };
    requestAdd.onerror = (ev) => console.log(`error ${ev} - ${requestAdd.error}`);

    return false;
  }

  buscarDespesas(): Array<Despesa> {
    let despesas: Array<Despesa> = [];
    let conec: any;
    const request = self.indexedDB.open("meusGastos", 2);
    request.onsuccess = (event) => {
      const q = request.result;
      request.result.onupgradeneeded = (event) => {
       console.log(`event  = ${event}`)
      this.openDB().then((ev) => {
        console.log(ev);
        const requestFind = this.db.transaction("cliente").objectStore("cliente").openCursor();
        requestFind.onsuccess = (ev) => {
          var cursor = ev.target.result;
          if (cursor) {
            despesas.push(cursor.value);
            cursor.continue();
          }
          else {
            alert("Não existe mais registros!");
          }
        }
      });
    };
   };
    return despesas;
  }

  excluirDespesa(despesa): Boolean {
    const request = this.db;
    request.onsuccess = (event) => {
      this.db = event.request;
    };
    const requestDel = this.db.transaction("cliente")
      .objectStore("cliente").delete(despesa.id);
    return this.Tratativa(requestDel, despesa);
  }

  private async openDB(): Promise<any> {
    const request = this.db;
    request.onsuccess = (event) => {
      this.db = request.result;
    };
    request.onerror = (event) => {
      console.error("Você não habilitou minha web app para usar IndexedDB?!");
    };
    this.tratativarequest(request);

    return this.db;
  }


  private tratativarequest(request: IDBOpenDBRequest) {
    request.onsuccess = (event) => {
      console.info(request);
      this.db = request.result;
    };
  }
}
