import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<IArticleInput>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initializeValuesProps.title,
      description: this.initializeValuesProps.description,
      body: this.initializeValuesProps.body,
      tagList: this.initializeValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {
    const articleInput: IArticleInput = {
      ...this.form.value,
      tagList: this.form.value.tagList.split(' '),
    };
    this.articleSubmitEvent.emit(articleInput);
  }
}
