package com.pei.costuraorganizada.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "encomenda")
public class Encomenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;
    private LocalDate dataPedido;
    private LocalDate dataEntrega;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    @JsonIgnoreProperties("historicoEncomendas")
    private Cliente cliente;
}