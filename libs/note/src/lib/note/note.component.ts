import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../note.service';

@Component({
  selector: 'speed-run-note',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>note works!</p>
    <pre>{{ notes$ | async | json }}</pre>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  notes$ = this.service.getNotes();
  constructor(private service: NoteService) {}
}
