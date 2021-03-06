import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  providers: [UtilsService],
  exports: [PaginationComponent],
})
export class PaginationModule {}
