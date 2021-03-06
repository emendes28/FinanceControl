import { Component, OnInit, Input  } from '@angular/core';
import { Despesa } from '../models/despesa';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  preserveWhitespaces: false
})
export class ListComponent implements OnInit {
  
  constructor(private _data:DataService) { }  
  //@Input() despesas: Array<Despesa>;
  despesas : Array<Despesa> = [];
  itemCount : number = 0;


  ngOnInit() {
    const self = this;
    self._data.buscarDespesas().forEach(a=>self.despesas = a);
    //self._data.despesa.subscribe(res=>self.despesas = res);      
    self._data.qtd.subscribe(res=>self.itemCount = res); 
    self._data.alterarContagem(self.itemCount);
    
  }

  removeItem(i){
    const self = this;    
    self._data.excluirDespesa(self.despesas[i]).subscribe(res=>  {
      if(res != undefined) {
        self.despesas.splice(i,1);
        self.itemCount = self.despesas.length;
        self._data.alterarContagem(self.calcTotal());
      }      
    });
  }

  private calcTotal():number{
    return Math.abs(this.despesas.map(a=>a.valor).reduce((a,b)=>a-b));
  }

}
