import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from '@speed-run/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent],
  providers: [HttpClient],
  selector: 'speed-run-root',
  template: `
    <h1>{{ title }}</h1>
    <speed-run-nav />
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
        padding: 2rem 1.5rem 1.5rem;
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
}
