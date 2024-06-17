import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import 'moment/locale/pt-br';
import { TarefaService } from '../../../../services/tarefa.service';
import { EncomendaService } from '../../../../services/encomendaservice.service';
import { Tarefa } from '../../../../models/tarefa.model';
import { Encomenda } from '../../../../models/encomenda.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentDate = moment();
  tarefas: Tarefa[] = [];
  encomendas: Encomenda[] = [];

  constructor(
    private tarefaService: TarefaService,
    private encomendaService: EncomendaService
  ) {}

  ngOnInit() {
    this.loadTarefas();
    this.loadEncomendas();
  }

  get month(): string {
    return this.currentDate.format('MMMM');
  }

  get year(): string {
    return this.currentDate.format('YYYY');
  }

  get daysInMonth(): any[] {
    const startOfMonth = this.currentDate.clone().startOf('month');
    const endOfMonth = this.currentDate.clone().endOf('month');
    const days = [];
    let date = startOfMonth.clone().startOf('week');

    while (date.isBefore(endOfMonth.clone().endOf('week'))) {
      const hasTarefa = this.tarefas.some(tarefa => moment(tarefa.prazo).isSame(date, 'day'));
      const hasEncomenda = this.encomendas.some(encomenda => moment(encomenda.dataEntrega).isSame(date, 'day'));

      days.push({
        date: date.clone(),
        isCurrentMonth: date.month() === this.currentDate.month(),
        isToday: date.isSame(moment(), 'day'),
        hasTarefa,
        hasEncomenda
      });
      date.add(1, 'day');
    }

    return days;
  }

  previousMonth(): void {
    this.currentDate = this.currentDate.clone().subtract(1, 'month');
  }

  nextMonth(): void {
    this.currentDate = this.currentDate.clone().add(1, 'month');
  }

  private loadTarefas(): void {
    this.tarefaService.getTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
    });
  }

  private loadEncomendas(): void {
    this.encomendaService.getEncomendas().subscribe(encomendas => {
      this.encomendas = encomendas;
    });
  }
}
