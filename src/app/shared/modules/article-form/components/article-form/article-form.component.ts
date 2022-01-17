import { Component, Input, OnInit } from '@angular/core';
import { IArticleInput } from '../../../../types/article-input.interface';
import { IBackendErrors } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initializeValues') initializeValuesProps: IArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('error') errorProps: IBackendErrors | null;

  constructor() {}

  ngOnInit(): void {}
}
