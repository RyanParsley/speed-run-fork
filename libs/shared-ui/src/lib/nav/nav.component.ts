import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-run-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <ul>
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Home</a
          >
        </li>
        <li>
          <a
            routerLink="/note"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Note</a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: `
    nav {
      border: solid 1px #333;
      margin: 1rem;
      border-radius: 3rem;
      li {
        display: inline-block;
      }
      a {
        display: inline-block;
        background: #efefef;
        padding: 1rem;
        margin: 0 .5rem;
        border-radius: .5rem;
        &:hover, &.active {
          background: #999;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
