import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Despesa } from './models/despesa';
import { Categoria } from './models/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private dispendeEndPoind:string = `${location.origin}/dispende/`;
  private categoryEndPoind:string = `${location.origin}/category/`;

  //private DBOpenRequest = self.indexedDB.open('meusGastos', 2);
  private despesas = new BehaviorSubject<Array<Despesa>>([]);
  private countDespesas = new BehaviorSubject<number>(0);
  private despesasSave = [];
  //private db: any = self.indexedDB.open("meusGastos", 2);
  despesa = this.despesas.asObservable();
  qtd = this.countDespesas.asObservable();

  constructor(private http: HttpClient) {
    this.despesasSave = new Array<Despesa>();
  }

  alterarDespesa(despesa:Despesa):Observable<any> {
    return this.http.put(`${this.dispendeEndPoind}${despesa._id}`, despesa);
  }

  alterarContagem(qtd) {
    this.countDespesas.next(qtd);
  }

  salveDespesa(despesa:Despesa):Observable<any> {
    let d:Array<Despesa> = JSON.parse(localStorage.getItem('Despesas'));
    d.push(despesa);
    this.despesas.next(Object.assign({},d));
    localStorage.setItem('Despesas',JSON.stringify(d));
    return this.http.post(this.dispendeEndPoind, despesa);
  }


  buscarDespesas():Observable<Array<Despesa>>{
    try {
      let despesas: Array<Despesa> = [];
     let obDespesa =  this.http.get<Array<Despesa>>(this.dispendeEndPoind);
     obDespesa.subscribe(od => despesas = od);
      if(despesas) {
        localStorage.setItem('Despesas',JSON.stringify(despesas));
      }
      return obDespesa;
    } catch (e)   {
      console.log(e);
      this.despesas.next(Object.assign({}, JSON.parse(localStorage.getItem('Despesas'))));
      return this.despesas;
    }
  
  }

  excluirDespesa(despesa):Observable<any> {
    this.despesasSave = this.despesasSave.filter(s=> s.id != despesa.id);
    localStorage.setItem('Despesas',JSON.stringify(this.despesasSave));
    return this.http.delete(`${this.dispendeEndPoind}${despesa._id}`);
  }
  
  buscarCategorias():Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoryEndPoind,{});
  }
}
