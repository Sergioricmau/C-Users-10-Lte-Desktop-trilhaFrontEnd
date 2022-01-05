import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  title = 'app'
  nomeCompleto = 'Sergio Ricardo Mauricio';
  nomeGuia = 'Alex/Katia'
  turma = 'turma Trilha Angular';
  data = Date.now()
}

