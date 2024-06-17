import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../../../services/tarefa.service';
import { TarefaDetailComponent } from '../tarefa-detail/tarefa-detail.component';
import { TarefaFormComponent } from '../tarefa-form/tarefa-form.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { Tarefa } from '../../../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-list',
  standalone: true,
  imports: [CommonModule, TarefaDetailComponent, TarefaFormComponent, ModalComponent],
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.scss']
})
export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  selectedTarefa: Tarefa = { id: 0, descricao: '', prazo: '', concluida: false };
  showModal: boolean = false;
  modalTitle: string = '';
  isEditing: boolean = false;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.loadTarefas();
  }

  loadTarefas() {
    this.tarefaService.getTarefas().subscribe(tarefas => {
      this.tarefas = tarefas.sort((a, b) => a.descricao.localeCompare(b.descricao));
    });
  }

  onAddTarefa() {
    this.selectedTarefa = { id: 0, descricao: '', prazo: '', concluida: false };
    this.modalTitle = 'Adicionar Tarefa';
    this.isEditing = false;
    this.showModal = true;
  }

  onEditTarefa(tarefa: Tarefa) {
    this.selectedTarefa = { ...tarefa };
    this.modalTitle = 'Editar Tarefa ';
    this.isEditing = true;
    this.showModal = true;
  }

  onSaveTarefa(tarefa: Tarefa) {
    if (this.isEditing) {
      this.tarefaService.updateTarefa(tarefa).subscribe(() => {
        this.loadTarefas();
        this.showModal = false;
      });
    } else {
      this.tarefaService.addTarefa(tarefa).subscribe(() => {
        this.loadTarefas();
        this.showModal = false;
      });
    }
  }

  onDeleteTarefa(tarefa: Tarefa) {
    this.tarefaService.deleteTarefa(tarefa.id).subscribe(() => {
      this.loadTarefas();
      this.showModal = false;
    });
  }

  onViewTarefa(tarefa: Tarefa) {
    this.selectedTarefa = tarefa;
    this.modalTitle = 'Detalhes da Tarefa';
    this.isEditing = false;
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
    this.selectedTarefa = { id: 0, descricao: '', prazo: '', concluida: false };
    this.isEditing = false;
  }
}
