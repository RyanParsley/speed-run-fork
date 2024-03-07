import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteService } from '../note.service';
import { MarkdownPipe } from 'ngx-markdown';

@Component({
  selector: 'speed-run-note-detail',
  standalone: true,
  imports: [CommonModule, MarkdownPipe],
  template: `
    @if (note$ | async; as note) {
    <h1>{{ note.title }}</h1>
    <section [innerHtml]="note.content | markdown | async"></section>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailComponent {
  id = this.route.snapshot.paramMap.get('id') || '0';
  note$ = this.service.getNote(parseInt(this.id));
  constructor(private service: NoteService, private route: ActivatedRoute) {}
}
