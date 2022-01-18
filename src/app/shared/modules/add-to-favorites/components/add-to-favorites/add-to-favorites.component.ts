import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../../store/actions/add-to-favorites.action';

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
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorite = this.isFavoriteProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorite: this.isFavorite,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount--;
    } else {
      this.favoritesCount = this.favoritesCount++;
    }

    this.isFavorite = !this.isFavorite;
  }
}
