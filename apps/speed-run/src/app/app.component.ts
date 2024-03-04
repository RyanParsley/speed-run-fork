import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'speed-run-root',
  template: `
    <h1>{{ title }}</h1>
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
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      h1 {
        background: #333;
        padding: 3em;
        margin: 0;
        color: #fff;
      }
      .content {
        padding: 1rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Speedrun';
  private foo = 'bar';
}
