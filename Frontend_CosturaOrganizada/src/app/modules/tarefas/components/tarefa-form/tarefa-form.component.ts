import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss']
})
export class TarefaFormComponent implements OnInit {
  @Input() tarefa: Tarefa = { id: 0, descricao: '', prazo: '', concluida: false };
  @Output() save = new EventEmitter<Tarefa>();
  @Output() cancel = new EventEmitter<void>();

  ngOnInit() {}

  onSave() {
    if (this.tarefa.descricao && this.tarefa.prazo) {
      this.save.emit(this.tarefa);
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
