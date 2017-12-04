import { Component, OnInit } from '@angular/core';
import { Despesa } from '../models/despesa';
import { DataService } from '../data.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  preserveWhitespaces: false
})

export class OverviewComponent implements OnInit {

  btnText: string = 'Adicionar';
  despesas: Array<Despesa> = [];
  categorias = ['Mercado','Almoco','Outros','Compras','Farmacia','Estudo','Mimos','Lanche'];
  despesa: Despesa = new Despesa(0, '', new Date(), 0);
  total: number = 0;
  showMesage: Boolean = false;

  constructor(private _data: DataService) { }

  ngOnInit() {
    const self = this;
    self._data.despesa.subscribe(res => self.despesas = res);
    self._data.qtd.subscribe(res => self.total = res);
    self.openDB();
    self._data.buscarDespesas();
    self._data.alterarDespesa(self.despesas);
    self._data.alterarContagem(self.total);
  }


  addItem() {
    const self = this;
    if (self.despesa.desc != '' && self.despesa.desc != 'Acresente uma descrição') {
      self.despesas.push(new Despesa(self.despesas.length + 1, self.despesa.desc, self.despesa.data, self.despesa.valor));
      self._data.alterarDespesa(self.despesas);
      self.total = self.calcTotal();
      self._data.alterarContagem(self.total);
      if (self._data.salveDespesa(self.despesa)) {
        self.showMesage = true;
      } else {
        self.showMesage = false;
      }
    } else {
      self.despesa.desc = 'Acresente uma descrição';
    }
  }

  private calcTotal(): number {
    return this.despesas.map(a => a.valor).reduce((a, b) => a + b);
  }

  private openDB() {
    const self = this;
    let db;
    const request = indexedDB.open("meusGastos");
    request.onerror = (event) => {
      console.error("Você não habilitou minha web app para usar IndexedDB?!");
    };
    request.onsuccess = (event) => {
      db = request.result;
      const myData = db.objectStoreNames[0];
      const transaction = db.transaction(myData);
      const objectStore = transaction.objectStore(myData);
      const requestData = objectStore.getAll();
      request.onerror = (event) => {
        console.error(event);
      };
      request.onsuccess = (event) => {
        // Fazer algo com request.result!
        self.despesas = request.result;
      };
    };
    console.info(request);
  }
}