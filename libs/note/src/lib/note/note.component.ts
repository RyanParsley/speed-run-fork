import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../note.service';
import { CardComponent } from '@speed-run/shared-ui';

@Component({
  selector: 'speed-run-note',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <h1>Notes</h1>
    @for (note of notes$ | async; track note.id) {
    <speed-run-card [title]="note.title" [link]="note.id">
      {{ note.description }}
    </speed-run-card>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  notes$ = this.service.getNotes();
  constructor(private service: NoteService) {}
}
