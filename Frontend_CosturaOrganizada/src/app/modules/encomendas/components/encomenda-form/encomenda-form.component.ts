import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../../../services/clienteservice.service';
import { Cliente } from '../../../../models/cliente.model';
import { Encomenda } from '../../../../models/encomenda.model';

@Component({
  selector: 'app-encomenda-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encomenda-form.component.html',
  styleUrls: ['./encomenda-form.component.scss']
})
export class EncomendaFormComponent implements OnInit {
  @Input() encomenda: Encomenda = { descricao: '', dataPedido: '', dataEntrega: '', cliente: { id: 0, nome: '', contato: '', email: '' } };
  @Output() save = new EventEmitter<Encomenda>();
  @Output() cancel = new EventEmitter<void>();

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  onSave() {
    if (this.encomenda.descricao && this.encomenda.dataPedido && this.encomenda.dataEntrega && this.encomenda.cliente.id) {
      this.save.emit(this.encomenda);
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  }

  onCancel() {
    this.cancel.emit();
    window.location.reload();
  }
}
