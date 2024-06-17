package com.pei.costuraorganizada.controller;

import com.pei.costuraorganizada.model.Tarefa;
import com.pei.costuraorganizada.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {

    @Autowired
    private TarefaService tarefaService;

    @GetMapping
    public List<Tarefa> getAllTarefas() {
        return tarefaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> getTarefaById(@PathVariable Long id) {
        return tarefaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tarefa createTarefa(@RequestBody Tarefa tarefa) {
        return tarefaService.save(tarefa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> updateTarefa(@PathVariable Long id, @RequestBody Tarefa tarefa) {
        return tarefaService.findById(id)
                .map(existingTarefa -> {
                    tarefa.setId(existingTarefa.getId());
                    return ResponseEntity.ok(tarefaService.save(tarefa));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTarefa(@PathVariable Long id) {
        if (tarefaService.findById(id).isPresent()) {
            tarefaService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
