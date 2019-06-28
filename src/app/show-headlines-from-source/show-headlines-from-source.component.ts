import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {Article} from '../models/article';
import {ArticleResponse} from '../models/article-response';

@Component({
  selector: 'app-show-headlines-from-source',
  templateUrl: './show-headlines-from-source.component.html',
  styleUrls: ['./show-headlines-from-source.component.scss']
})
export class ShowHeadlinesFromSourceComponent implements OnInit {

  constructor(private news: NewsService) {
  }

  public headlines: Article[];

  ngOnInit() {
    this.news.getHeadlinesFromSource().subscribe((data: ArticleResponse) => {
      this.headlines = data.articles;
    });
  }

}
