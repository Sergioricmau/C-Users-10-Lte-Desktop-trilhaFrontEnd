
import { Component } from '@angular/core';
import { Formulario } from './model/formulario';
import { FormularioService } from './service/formulario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 formulario = new Array<Formulario>();

  constructor( formService:FormularioService ) {

    formService.getEmployees().subscribe(response =>
    {
      this.formulario = response.map(item =>
      {
        return new Formulario(
            item.id,
            item.name,
            item.status
        );
      });
    });

  }

}
