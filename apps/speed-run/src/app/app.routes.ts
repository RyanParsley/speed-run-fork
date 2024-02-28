import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'note',
    loadChildren: () => import('@speed-run/note').then((c) => c.noteRoutes),
  },
];
