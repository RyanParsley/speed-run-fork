import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-run-user-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>user-detail works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent {}
