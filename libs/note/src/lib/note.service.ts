import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly endpoint = 'http://localhost:4200/data/notes.json';
  constructor(private readonly http: HttpClient) {}

  getNotes(): Readonly<Observable<any>> {
    return this.http.get<any>(this.endpoint);
  }
}
