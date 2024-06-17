import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncomendaService } from '../../../../services/encomendaservice.service';
import { EncomendaDetailComponent } from '../encomenda-detail/encomenda-detail.component';
import { EncomendaFormComponent } from '../encomenda-form/encomenda-form.component';
import { ModalComponent } from '../../../../components/modal/modal.component';

@Component({
  selector: 'app-encomenda-list',
  standalone: true,
  imports: [CommonModule, EncomendaDetailComponent, EncomendaFormComponent, ModalComponent],
  templateUrl: './encomenda-list.component.html',
  styleUrls: ['./encomenda-list.component.scss']
})
export class EncomendaListComponent implements OnInit {
  encomendas: any[] = [];
  selectedEncomenda: any = null;
  showModal: boolean = false;
  modalTitle: string = '';
  isEditing: boolean = false;

  constructor(private encomendaService: EncomendaService) {}

  ngOnInit() {
    this.loadEncomendas();
  }

  loadEncomendas() {
    this.encomendaService.getEncomendas().subscribe(encomendas => {
      this.encomendas = encomendas.sort((a, b) => a.descricao.localeCompare(b.descricao));
    });
  }

  onAddEncomenda() {
    this.selectedEncomenda = { descricao: '', dataPedido: '', dataEntrega: '', cliente: '' };
    this.modalTitle = 'Adicionar Encomenda';
    this.isEditing = false;
    this.showModal = true;
  }

  onEditEncomenda(encomenda: any) {
    this.selectedEncomenda = { ...encomenda };
    this.modalTitle = 'Editar Encomenda';
    this.isEditing = true;
    this.showModal = true;
  }

  onSaveEncomenda(encomenda: any) {
    if (this.isEditing) {
      this.encomendaService.updateEncomenda(encomenda).subscribe(() => {
        this.loadEncomendas();
        this.showModal = false;
      });
    } else {
      this.encomendaService.addEncomenda(encomenda).subscribe(() => {
        this.loadEncomendas();
        this.showModal = false;
      });
    }
  }

  onDeleteEncomenda(encomenda: any) {
    this.encomendaService.deleteEncomenda(encomenda.id).subscribe(() => {
      this.loadEncomendas();
      this.showModal = false;
    });
  }

  onViewEncomenda(encomenda: any) {
    this.selectedEncomenda = encomenda;
    this.modalTitle = 'Detalhes da Encomenda';
    this.isEditing = false;
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
    this.selectedEncomenda = null;
    this.isEditing = false;
  }
}
