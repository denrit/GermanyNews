import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {Source} from '../models/source';
import {SourceResponse} from '../models/source-response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-sources',
  templateUrl: './show-sources.component.html',
  styleUrls: ['./show-sources.component.scss']
})
export class ShowSourcesComponent implements OnInit {

  public sources: Array<Source>;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsService.getSources().subscribe((data: SourceResponse) => {
      this.sources = data.sources;
    });
  }

  showHeadlineFromSource(source: string) {
    this.newsService.source = source;
    this.router.navigate(['/', 'showHeadlinesFromSource']);
  }

}
