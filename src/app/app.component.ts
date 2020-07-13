import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EndavaOnlineLibrary-UI';
  books$: Observable<Book>;

  constructor(httpClient: HttpClient){
    this.books$ = httpClient.get<Book>('https://localhost:44358/books');
  }
}
