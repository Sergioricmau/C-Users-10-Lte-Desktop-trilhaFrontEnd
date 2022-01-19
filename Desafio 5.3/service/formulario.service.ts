import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario } from '../model/formulario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  getFormulario() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Formulario[]> {
    const url = 'http://localhost:4200/formulario';
    return this.http.get<Formulario[]>(url);
  }
}
