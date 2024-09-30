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

  cliente:Cliente = new Cliente();

  tabela:boolean = true;
  
  constructor(private servico:ClienteService){}
  
  ngOnInit(){
    this.buscarClientes();

  }

  buscarClientes():void{
    this.servico.selecionarCliente()
    .subscribe(retorno => this.clientes = retorno)
  }

  cadastrarCliente():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(ret => {

      this.clientes.push(ret)
      this.limparCliente();
      alert('Cliente Cadastrado com Sucesso')

    })
  }

  selecionarCliente(posicao:number):void{

    this.cliente = this.clientes[posicao];
    this.btnCadastro = false;
    this.tabela = false;

  }

  alterarCliente():void{
    this.servico.alterar(this.cliente)
    .subscribe(ret => {

      let posicao = this.clientes.findIndex(obj =>{
        return obj.codigo == ret.codigo;
      });

      this.clientes[posicao] = ret;
      this.limparCliente();
      alert('Cliente Alterado com Sucesso.')
      this.isVisibilidadeBotoes();

    })
  }

  removerCliente():void{
    this.servico.remover(this.cliente.codigo)
    .subscribe(ret =>{

      let posicao = this.clientes.findIndex(obj =>{
        return obj.codigo == this.cliente.codigo;
      });

      this.clientes.splice(posicao,1);
      this.limparCliente();
      alert('Cliente Apagado com sucesso')
      this.isVisibilidadeBotoes();

    })
  }

  cancelar():void{
    this.limparCliente();
    this.isVisibilidadeBotoes();

  }

  isVisibilidadeBotoes(){
    this.btnCadastro = true;
    this.tabela = true;
  }

  isNotVisibilidadeBotoes(){
    this.btnCadastro = false;
    this.tabela = false;
  }

  limparCliente():void{
    this.cliente = new Cliente();
  }




  



}
