import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../../services/clienteservice.service';
import { ClienteDetailComponent } from '../cliente-detail/cliente-detail.component';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ModalComponent } from '../../../../components/modal/modal.component';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule, ClienteDetailComponent, ClienteFormComponent, ModalComponent],
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  clientes: any[] = [];
  selectedCliente: any = null;
  showModal: boolean = false;
  modalTitle: string = '';
  isEditing: boolean = false;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  }

  onAddCliente() {
    this.selectedCliente = { nome: '', contato: '', email: '' };
    this.modalTitle = 'Adicionar Cliente';
    this.isEditing = false;
    this.showModal = true;
  }

  onEditCliente(cliente: any) {
    this.selectedCliente = { ...cliente };
    this.modalTitle = 'Editar Cliente';
    this.isEditing = true;
    this.showModal = true;
  }

  onSaveCliente(cliente: any) {
    if (this.isEditing) {
      this.clienteService.updateCliente(cliente).subscribe(() => {
        this.loadClientes();
        this.showModal = false;
      });
    } else {
      this.clienteService.addCliente(cliente).subscribe(() => {
        this.loadClientes();
        this.showModal = false;
      });
    }
  }

  onDeleteCliente(cliente: any) {
    this.clienteService.deleteCliente(cliente.id).subscribe(() => {
      this.loadClientes();
      this.showModal = false;
    });
  }

  onViewCliente(cliente: any) {
    this.selectedCliente = cliente;
    this.modalTitle = 'Detalhes do Cliente';
    this.isEditing = false;
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
    this.selectedCliente = null;
    this.isEditing = false;
  }
}
