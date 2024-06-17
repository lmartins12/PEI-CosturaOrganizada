import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Encomenda } from '../../../../models/encomenda.model';

@Component({
  selector: 'app-encomenda-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encomenda-detail.component.html',
  styleUrls: ['./encomenda-detail.component.scss']
})
export class EncomendaDetailComponent implements OnInit {
  @Input() encomenda: Encomenda = { id: 0, descricao: '', dataPedido: '', dataEntrega: '', cliente: { id: 0, nome: '', contato: '', email: '' } };
  @Output() edit = new EventEmitter<Encomenda>();
  @Output() delete = new EventEmitter<Encomenda>();

  ngOnInit() {
    if (!this.encomenda) {
      this.encomenda = { id: 0, descricao: '', dataPedido: '', dataEntrega: '', cliente: { id: 0, nome: '', contato: '', email: '' } };
    }
  }

  onEdit() {
    this.edit.emit(this.encomenda);
  }

  onDelete() {
    this.delete.emit(this.encomenda);
  }
}
