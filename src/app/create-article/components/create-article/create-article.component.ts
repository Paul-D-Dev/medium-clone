import { Component, OnInit } from '@angular/core';
import { IArticleInput } from '../../../shared/types/article-input.interface';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initializeValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(ev: any): void {
    console.log('ev', ev);
  }
}
