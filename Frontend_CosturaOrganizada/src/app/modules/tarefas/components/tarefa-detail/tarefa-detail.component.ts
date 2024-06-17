import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.scss']
})
export class TarefaDetailComponent implements OnInit {
  @Input() tarefa: Tarefa = { id: 0, descricao: '', prazo: '', concluida: false };
  @Output() edit = new EventEmitter<Tarefa>();
  @Output() delete = new EventEmitter<Tarefa>();

  ngOnInit() {}

  onEdit() {
    this.edit.emit(this.tarefa);
  }

  onDelete() {
    this.delete.emit(this.tarefa);
  }
}
