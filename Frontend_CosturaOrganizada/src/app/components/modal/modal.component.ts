import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
    this.reloadPage();
  }

  onClickOutside(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal-container')) {
      this.onClose();
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
