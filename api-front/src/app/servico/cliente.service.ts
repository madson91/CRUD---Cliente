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

  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url+'/', obj);
  }

  alterar(obj:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'/', obj);
  }

  remover(codigo:Number):Observable<void>{
    return this.http.delete<void>(this.url+'/'+ codigo);
  }

}
