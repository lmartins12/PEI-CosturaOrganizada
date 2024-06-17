import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../../models/cliente.model';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  @Input() cliente: Cliente = { id: 0, nome: '', contato: '', email: '' };
  @Output() save = new EventEmitter<Cliente>();
  @Output() cancel = new EventEmitter<void>();

  ngOnInit() {}

  onSave() {
    if (this.cliente.nome && this.cliente.contato && this.cliente.email) {
      this.save.emit(this.cliente);
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  }

  onCancel() {
    this.cancel.emit();
    window.location.reload();
  }
}
