import { Component, OnInit } from '@angular/core';
import {Headline} from '../models/headline';

const ELEMENT_DATA: Headline[] = [
  {title: 'testTitle', author: 'testAuthor', source: 'testSource', publicationDate: new Date('01/23/2000'), content: 'testContent'}
];

@Component({
  selector: 'app-show-headlines',
  templateUrl: './show-headlines.component.html',
  styleUrls: ['./show-headlines.component.scss']
})
export class ShowHeadlinesComponent implements OnInit {

  constructor() { }

  headlines: Headline[];

  ngOnInit() {
    this.headlines = ELEMENT_DATA;
  }

}
