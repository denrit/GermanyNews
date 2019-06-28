import {Component, OnInit} from '@angular/core';
import {ArticleResponse} from '../models/article-response';
import {NewsService} from '../services/news.service';
import {SourceResponse} from '../models/source-response';
import {Article} from '../models/article';
import {debounce, debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-show-headlines',
  templateUrl: './show-headlines.component.html',
  styleUrls: ['./show-headlines.component.scss']
})
export class ShowHeadlinesComponent implements OnInit {

  constructor(private news: NewsService) {
  }

  public articles: Article[];
  public searchWord: string;

  searchArticles() {
    this.articles = null;
    if (this.searchWord) {
      this.news.getSerachedArticles(this.searchWord).subscribe((data: ArticleResponse) => {
        this.articles = data.articles;
      });
    } else {
      this.showHeadlines();
    }
  }

  showHeadlines() {
    this.news.getArticles().subscribe((data: ArticleResponse) => {
      this.articles = data.articles;
    });
  }

  ngOnInit() {
    this.showHeadlines();
  }
}
