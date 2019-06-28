import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {Headline} from '../models/headline';
import {HeadlineResponse} from '../models/headline-response';

@Component({
  selector: 'app-show-headlines-from-source',
  templateUrl: './show-headlines-from-source.component.html',
  styleUrls: ['./show-headlines-from-source.component.scss']
})
export class ShowHeadlinesFromSourceComponent implements OnInit {

  constructor(private news: NewsService) {
  }

  public headlines: Headline[];

  ngOnInit() {
    this.news.getHeadlinesFromSource().subscribe((data: HeadlineResponse) => {
      this.headlines = data.articles;
    });
  }

}
