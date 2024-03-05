import { Route } from '@angular/router';
import { NotFoundComponent } from './notFound.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/note',
    pathMatch: 'full',
  },
  {
    path: 'note',
    loadChildren: () => import('@speed-run/note').then((c) => c.noteRoutes),
  },
  {
    path: 'notFound',
    component: NotFoundComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
