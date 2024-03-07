import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'speed-run-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a
      [routerLink]="link"
      routerLinkActive="active"
      ariaCurrentWhenActive="page"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      <h2>{{ title }}</h2>
      <ng-content></ng-content>
    </a>
  `,
  styles: `
    :host {
      display: inline-block;
      margin: 0 1rem 1rem 0;
    }
    a {
      border: 1px solid red;
      padding: 1rem;
      border-radius: 3px;
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) link!: string;
}
