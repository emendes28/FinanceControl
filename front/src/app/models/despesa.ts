export class Despesa {
  _id: number;
  desc: string;
  data: Date;
  valor: number;

  constructor(id:number, desc: string, data: Date,valor: number) {
    this._id = id;
    this.desc = desc;
    this.data = data;
    this.valor = valor;
  }
}
