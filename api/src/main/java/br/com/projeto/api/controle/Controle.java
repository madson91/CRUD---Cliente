package br.com.projeto.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;

@RestController
@RequestMapping("/cliente")
public class Controle {

    @Autowired
    private Repositorio repo;


    @GetMapping("/")
    public String hello() {
        return "Bem Vindo ao Cadastro de Clientes";
    }

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c) {
        repo.save(c);

        return c;
    }

    @PutMapping("/")
    public Cliente alterar(@RequestBody Cliente c) {
        repo.save(c);
        return c;
    }

    @DeleteMapping("/{codigo}")
    public void delete(@PathVariable("codigo") long codigo) {
        repo.deleteById(codigo);
    }

    @GetMapping("/all")
    public Iterable<Cliente> buscarAll() {

        return repo.findAll();
    }


}
