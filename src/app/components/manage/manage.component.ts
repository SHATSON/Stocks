import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'manage',
  templateUrl: './manage.component.htm',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

}
