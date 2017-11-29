import { Component, OnInit } from '@angular/core';
import { Despesa } from '../models/despesa';
import { DataService } from '../data.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  btnText: string = 'Adicionar';
  despesas : Array<Despesa> = [];
  categorias = ['Almoço', 'Mercado'];
  despesa : Despesa = new Despesa('', new Date(),0);
  total : number = 0;

  constructor(private _data:DataService) { }  

  ngOnInit() {
    const self = this;    
    self._data.despesa.subscribe(res=>self.despesas = res);    
    self._data.qtd.subscribe(res=>self.total = res); 
    self._data.alterarDespesa(self.despesas);
    self._data.alterarContagem(self.total);
  }


  addItem() {    
    const self = this;
    if(self.despesa.desc != '' && self.despesa.desc  != 'Acresente uma descrição' ){
      self.despesas.push(new Despesa(self.despesa.desc, self.despesa.data,self.despesa.valor));      
      self._data.alterarDespesa(self.despesas);
      self.total = self.calcTotal();
      self._data.alterarContagem(self.total);
    } else {
      self.despesa.desc = 'Acresente uma descrição';
    }
  }

 private calcTotal():number{
   return this.despesas.map(a=>a.valor).reduce((a,b)=>a+b);
 }

}