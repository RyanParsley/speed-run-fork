import { Route } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

export const noteRoutes: Route[] = [
  { path: '', component: NoteComponent },
  { path: 'new', component: NoteNewComponent },
  { path: ':id', component: NoteDetailComponent },
  { path: ':id/edit', component: NoteEditComponent },
];
