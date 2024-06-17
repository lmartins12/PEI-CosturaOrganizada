package com.pei.costuraorganizada.service;

import com.pei.costuraorganizada.model.Encomenda;
import com.pei.costuraorganizada.repository.EncomendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EncomendaService {

    @Autowired
    private EncomendaRepository encomendaRepository;

    public List<Encomenda> findAll() {
        return encomendaRepository.findAll();
    }

    public Optional<Encomenda> findById(Long id) {
        return encomendaRepository.findById(id);
    }

    public Encomenda save(Encomenda encomenda) {
        return encomendaRepository.save(encomenda);
    }

    public void deleteById(Long id) {
        encomendaRepository.deleteById(id);
    }
}
