import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';

@NgModule({
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  imports: [CommonModule],
})
export class AddToFavoritesModule {}
