import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'speed-run-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul class="primary">
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
        </li>
        <li>
          <a
            routerLink="/note"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Notes</a
          >
        </li>
        <li>
          <a
            routerLink="/user"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Users</a
          >
        </li>
      </ul>
      <ul class="secondary">
        <li>
          <a
            routerLink="/account"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Account</a
          >
        </li>
        <li>
          <a href="#">Log Out</a>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    nav {
      border: solid 1px #333;
      margin: 1rem;
      border-radius: 3rem;
    }
    ul {
      display: inline-block;
    }
    li {
        display: inline-block;
      }
    a {
      display: inline-block;
      background: #efefef;
      padding: 1rem;
      margin: 0 .5rem;
      border-radius: .5rem;
      text-decoration: none;
      color: #333;
    }
    a:hover {
      background: #666;
      color: #fff;
    }
    a.active, {
      background: #999;
      color: #000;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
