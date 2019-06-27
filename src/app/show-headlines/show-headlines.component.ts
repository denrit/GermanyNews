import {Component, OnInit} from '@angular/core';
import {HeadlineResponse} from '../models/headline-response';
import {NewsService} from '../services/news.service';

const ELEMENT_DATA: HeadlineResponse[] = [
  {title: 'testTitle', author: 'testAuthor', source: 'testSource', publicationDate: new Date('01/23/2000'), content: 'testContent'}
];

@Component({
  selector: 'app-show-headlines',
  templateUrl: './show-headlines.component.html',
  styleUrls: ['./show-headlines.component.scss']
})
export class ShowHeadlinesComponent implements OnInit {

  constructor(private news: NewsService) {
  }

  headlines: HeadlineResponse[];

  ngOnInit() {
    this.headlines = ELEMENT_DATA;
  }

  onClick() {
    this.news.showAlert().subscribe((data: any[]) => {
      console.log(data);
    });
  }
}
