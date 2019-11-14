import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  selectedBook;

  constructor(public booksService: BooksService, public wishlistService: WishlistService) {
    this.selectedBook = this.booksService.selectedBook;
   }

  ngOnInit() {
    console.log(this.selectedBook);
  }

  onCloseModal() {
    this.closeModal.emit();
  }

}
