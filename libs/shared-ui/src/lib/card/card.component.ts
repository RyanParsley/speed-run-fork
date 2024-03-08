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
    h2 {
      margin: 0 0 1rem -1rem;
      padding: 0 0 .25rem 1rem;
      border-bottom: 1px solid #999;
    }
    a {
      border: 1px solid #999;
      padding: 1rem;
      border-radius: 3px;
      display: inline-block;
      text-decoration: none;
      color: #333;
      box-shadow: 2px 2px 3px rgba(0,0,0,.2);
    }
    a:hover{
      background: #efefef;
      box-shadow: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) link!: string;
}
