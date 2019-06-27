import {Component, OnInit} from '@angular/core';
import {HeadlineResponse} from '../models/headline-response';
import {NewsService} from '../services/news.service';
import {SourceResponse} from '../models/source-response';
import {Headline} from '../models/headline';


@Component({
  selector: 'app-show-headlines',
  templateUrl: './show-headlines.component.html',
  styleUrls: ['./show-headlines.component.scss']
})
export class ShowHeadlinesComponent implements OnInit {

  constructor(private news: NewsService) {
  }

  public headlines: Headline[];

  ngOnInit() {
    this.news.getArticles().subscribe((data: HeadlineResponse) => {
      this.headlines = data.articles;
    });
  }
}
