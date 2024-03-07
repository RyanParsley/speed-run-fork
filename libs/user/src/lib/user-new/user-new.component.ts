import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-run-user-new',
  standalone: true,
  imports: [CommonModule],
  template: `<p>user-new works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserNewComponent {}
