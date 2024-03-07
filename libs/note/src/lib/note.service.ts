import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly base = ['localhost', '127.0.0.1'].includes(
    this.document.location.hostname
  )
    ? '/'
    : 'https://ryanparsley.github.io/speed-run/speed-run/browser/';

  private readonly endpoint = `${this.base}data/`;

  constructor(
    private readonly http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getNotes(): Readonly<Observable<any>> {
    return this.http.get<any>(`${this.endpoint}notes.json`);
  }
  getNote(id: number): Readonly<Observable<any>> {
    return this.http.get<any>(`${this.endpoint}note-${id}.json`);
  }
}
