package br.com.projeto.api.controle;

import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class Controle {

    @Autowired
    private Repositorio repo;


    @GetMapping("/")
    public String hello() {
        return "Hello world1";
    }

    @PostMapping("/cliente")
    public Cliente cadastrar(@RequestBody Cliente c) {
        repo.save(c);

        return c;
    }

    @GetMapping("/cliente")
    public Iterable<Cliente> buscarAll() {

        return repo.findAll();
    }


}
