import { utf8Encode } from '@angular/compiler/src/util';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'

})
export class AppComponent {

  title = 'app'
  nomeCompleto = 'Sergio Ricardo Mauricio';
  nomeGuia = 'Alex/Katia'
  turma = 'turma Trilha Angular';
  data = Date.now()
}

