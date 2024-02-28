import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-run-note',
  standalone: true,
  imports: [CommonModule],
  template: `<p>note works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {}
