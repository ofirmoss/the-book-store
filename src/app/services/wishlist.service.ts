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

  getWishlist() {
    return this.wishlist;
  }
}
