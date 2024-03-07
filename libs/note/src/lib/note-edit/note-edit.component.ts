import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-run-note-edit',
  standalone: true,
  imports: [CommonModule],
  template: `<p>note-edit works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteEditComponent {}
