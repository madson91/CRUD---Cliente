import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'http://localhost:8080/cliente'

  constructor(private http:HttpClient) { }

  selecionarCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+'/all')

  }


}
