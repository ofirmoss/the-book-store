import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist = [];

  constructor(private wishlistService: WishlistService) {
    this.wishlist = this.wishlistService.getWishlist( );
  }

  ngOnInit() {
  }

  removeFromList(book) {
    this.wishlistService.removeFromWishlist(book.id);
  }

}
