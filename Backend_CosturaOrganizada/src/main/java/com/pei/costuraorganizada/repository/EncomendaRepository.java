package com.pei.costuraorganizada.repository;

import com.pei.costuraorganizada.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {
}
