import {Component, OnInit} from '@angular/core';
import {ArticleResponse} from '../models/article-response';
import {NewsService} from '../services/news.service';
import {SourceResponse} from '../models/source-response';
import {Article} from '../models/article';


@Component({
  selector: 'app-show-headlines',
  templateUrl: './show-headlines.component.html',
  styleUrls: ['./show-headlines.component.scss']
})
export class ShowHeadlinesComponent implements OnInit {

  constructor(private news: NewsService) {
  }

  public headlines: Article[];

  ngOnInit() {
    this.news.getArticles().subscribe((data: ArticleResponse) => {
      this.headlines = data.articles;
    });
  }
}
