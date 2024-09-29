import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  btnCadastro:boolean = true;

  clientes:Cliente[] = [];
  
  constructor(private servico:ClienteService){}
  
  ngOnInit(){
    this.buscarClientes();

  }

  buscarClientes():void{
    this.servico.selecionarCliente()
    .subscribe(retorno => this.clientes = retorno)
  }


  



}
