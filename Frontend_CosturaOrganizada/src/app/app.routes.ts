import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ClienteListComponent } from './modules/clientes/components/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './modules/clientes/components/cliente-detail/cliente-detail.component';
import { EncomendaListComponent } from './modules/encomendas/components/encomenda-list/encomenda-list.component';
import { EncomendaDetailComponent } from './modules/encomendas/components/encomenda-detail/encomenda-detail.component';
import { TarefaListComponent } from './modules/tarefas/components/tarefa-list/tarefa-list.component';
import { TarefaFormComponent } from './modules/tarefas/components/tarefa-form/tarefa-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/:id', component: ClienteDetailComponent },
  { path: 'encomendas', component: EncomendaListComponent },
  { path: 'encomendas/:id', component: EncomendaDetailComponent },
  { path: 'tarefas', component: TarefaListComponent },
  { path: 'tarefas/:id', component: TarefaFormComponent },
];
