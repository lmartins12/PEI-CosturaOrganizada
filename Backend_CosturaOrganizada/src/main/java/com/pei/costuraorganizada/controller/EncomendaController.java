package com.pei.costuraorganizada.controller;

import com.pei.costuraorganizada.model.Encomenda;
import com.pei.costuraorganizada.service.EncomendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/encomendas")
@CrossOrigin(origins = "*")
public class EncomendaController {

    @Autowired
    private EncomendaService encomendaService;

    @GetMapping
    public List<Encomenda> getAllEncomendas() {
        return encomendaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Encomenda> getEncomendaById(@PathVariable Long id) {
        return encomendaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Encomenda createEncomenda(@RequestBody Encomenda encomenda) {
        return encomendaService.save(encomenda);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Encomenda> updateEncomenda(@PathVariable Long id, @RequestBody Encomenda encomenda) {
        return encomendaService.findById(id)
                .map(existingEncomenda -> {
                    encomenda.setId(existingEncomenda.getId());
                    return ResponseEntity.ok(encomendaService.save(encomenda));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEncomenda(@PathVariable Long id) {
        if (encomendaService.findById(id).isPresent()) {
            encomendaService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
