import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorite') isFavoriteProps: boolean;
  @Input('articleSlug') articleSlugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;

  favoritesCount: number;
  isFavorite: boolean;
  constructor() {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorite = this.isFavoriteProps;
  }

  handleLike(): void {
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount--;
    } else {
      this.favoritesCount = this.favoritesCount++;
    }

    this.isFavorite = !this.isFavorite;
  }
}
