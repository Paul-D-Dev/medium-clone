import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackedErrorMessagesComponent } from './backed-error-messages.component';

@NgModule({
  declarations: [BackedErrorMessagesComponent],
  imports: [CommonModule],
  exports: [BackedErrorMessagesComponent],
})
export class BackedErrorMessagesModule {}
