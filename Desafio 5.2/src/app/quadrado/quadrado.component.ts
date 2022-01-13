import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 @Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})

export class QuadradoComponent implements OnInit {
  constructor(private router: Router) {
    this.valor =
      this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
  }

  ngOnInit(): void {}

  valor: number = 0;
}
