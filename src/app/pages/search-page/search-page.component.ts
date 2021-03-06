import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  query: string;
  books: any[];
  modalOpen = false;

  constructor(
    private booksService: BooksService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }

  searchBooks() {
    if (!this.query) return
    this.booksService.getBook(this.query).subscribe(({response}) => {
      this.books = response.items;
    });
  }

  bookSelected(book) {
    this.booksService.bookSelected(book);
    this.modalOpen = true;
  }

  ngOnDestroy() {
  }

}
