import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('despesas',[
      transition('* => *',[
        query(':enter', style({ opacity: 0}), {optional : true}),
        query(':enter', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({ opacity: 0, transform :'translateY(-75%)', offset: 0}),
            style({ opacity: .5, transform :'translateY(35px)', offset: .3}),
            style({ opacity: 1, transform :'translateY(0)', offset: 1}),
          ]))]), {optional : true}),
        query(':leave', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({ opacity: 1, transform :'translateY(0)', offset: 0}),
            style({ opacity: .5, transform :'translateY(35px)', offset: .3}),
            style({ opacity: 0, transform :'translateY(-75%)', offset: 1}),
          ]))]), {optional : true})
      ])
    ])
  ]
})

export class OverviewComponent implements OnInit {

  itemCount : number = 0;
  btnText: string = 'Adicionar';
  despesas : Array<Dispense> = [];
  categorias = ['Almoço', 'Mercado'];
  despesa : Dispense = new Dispense();

  //constructor(private _data:DataService) { }
  constructor() { }

  ngOnInit() {
    const self = this;
    self.itemCount = self.despesas.length;
    
    //self._data.goal.subscribe(res=>self.goals = res);
    //self._data.changeGoal(self.goals);
  }


  addItem() {    
    const self = this;
    if(self.despesa.desc != '' && self.despesa.desc  != 'Acresente uma descrição' ){
      self.despesas.push(self.despesa);
      self.despesa.desc = '';
      self.itemCount = self.despesas.length;
      //self._data.changeGoal(self.despesas);
    } else {
      self.despesa.desc = 'Acresente uma descrição';
    }
  }

  removeItem(i){
    const self = this;
    self.despesas.splice(i,1);
    self.itemCount = self.despesas.length;
    //self._data.changeGoal(self.despesas);
  }

}


class Dispense {
  desc: string = 'Compra no mercado';
  data: number = Date.now();
  valor: number = 0.00;
}