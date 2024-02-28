import { Route } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

export const noteRoutes: Route[] = [
  { path: '', component: NoteComponent },
  { path: ':id', component: NoteDetailComponent }
];
