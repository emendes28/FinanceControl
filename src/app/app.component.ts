import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false
})
export class AppComponent {
  title = 'Controle de gastos';
}
