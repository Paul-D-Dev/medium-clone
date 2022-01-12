import { Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../../types/backend-errors.interface';

@Component({
  selector: 'app-backed-error-messages',
  templateUrl: './backed-error-messages.component.html',
  styleUrls: ['./backed-error-messages.component.scss'],
})
export class BackedErrorMessagesComponent implements OnInit {
  // backendErrorsProps is an alias and backendErrors is what we used to feed input
  @Input('backendErrors') backendErrorsProps: IBackendErrors;
  errorMessages: string[];
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(' ');
        return `${name}: ${messages}`;
      }
    );
  }
}
