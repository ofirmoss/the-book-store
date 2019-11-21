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
  isBookInWishlist;

  constructor(public booksService: BooksService, public wishlistService: WishlistService) {
    this.selectedBook = this.booksService.selectedBook;
    this.isBookInWishlist = this.wishlistService.isBookInWishlist(this.selectedBook.id);
   }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  toggleWishlist() {
    if (this.isBookInWishlist) {
      this.wishlistService.removeFromWishlist(this.selectedBook.id);
    } else {
      this.wishlistService.addToWishlist(this.selectedBook);
    }
    this.isBookInWishlist = !this.isBookInWishlist;
    setTimeout(() => {
      this.onCloseModal();
    }, 600);
  }

}
