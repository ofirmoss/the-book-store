import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  selectedBook;

  constructor() { }

  getBook(term) {
    const apiData = ajax(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${term}?maxResults=20`);
    return apiData;
  }

  bookSelected(book) {
    this.selectedBook = book;
  }
}
