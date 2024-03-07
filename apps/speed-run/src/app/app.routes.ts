import { Route } from '@angular/router';
import { NotFoundComponent } from './notFound.component';

export const appRoutes: Route[] = [
  {
    path: 'note',
    loadChildren: () => import('@speed-run/note').then((c) => c.noteRoutes),
  },
  {
    path: 'user',
    loadChildren: () => import('@speed-run/user').then((c) => c.userRoutes),
  },
  {
    path: 'notFound',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: '/note',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
