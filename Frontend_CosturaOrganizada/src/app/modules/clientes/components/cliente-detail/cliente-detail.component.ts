import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../../models/cliente.model';

@Component({
  selector: 'app-cliente-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {
  @Input() cliente: Cliente = { id: 0, nome: '', contato: '', email: '' };
  @Output() edit = new EventEmitter<Cliente>();
  @Output() delete = new EventEmitter<Cliente>();

  ngOnInit() {
    if (!this.cliente) {
      this.cliente = { id: 0, nome: '', contato: '', email: '' };
    }
  }

  onEdit() {
    this.edit.emit(this.cliente);
  }

  onDelete() {
    this.delete.emit(this.cliente);
  }
}
