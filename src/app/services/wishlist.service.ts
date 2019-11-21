import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist = [];

  constructor() { }

  addToWishlist(book) {
    this.wishlist.push(book);
  }

  removeFromWishlist(id) {
    const idx = this.wishlist.findIndex(book => book.id === id);
    this.wishlist.splice(idx, 1);
  }

  getWishlist() {
    return this.wishlist;
  }

  isBookInWishlist(id) {
    return this.wishlist.some(book => book.id === id)
  }
}
