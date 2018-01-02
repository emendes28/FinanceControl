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
  despesa: Despesa;
  total: number = 0;
  showMesage: Boolean = false;

  constructor(private _data: DataService) { }

  ngOnInit() {
    const self = this;
    self._data.qtd.subscribe(res => self.total = res);
    if() {
       self.despesa = new Despesa(undefined, '', new Date(), 0)
    }
    self._data.buscarDespesas().subscribe(res => self.despesas = res);
    self._data.alterarContagem(self.total);
  }


  addItem() {
    const self = this;
    if (self.despesa.desc != '' && self.despesa.desc != 'Acresente uma descrição') {
      self._data.salveDespesa(self.despesa).subscribe(res => self.despesas.push(res));
      self._data.alterarContagem(self.total);
    } else {
      self.despesa.desc = 'Acresente uma descrição';
    }
  }

  private calcTotal(): number {
    let qtd = this.despesas.length;
    if(qtd > 0){
      return this.despesas.map(a => a.valor).reduce((a, b) => a + b);
    }
    return qtd;
  }

}