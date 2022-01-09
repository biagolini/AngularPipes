import { Component } from '@angular/core';
import { TesteSinalPipe } from './shared/pipe/teste-sinal.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes';
  texto: string = "EXEmplo";
  numero: number = 1000000;
}
