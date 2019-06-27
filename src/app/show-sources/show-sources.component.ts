import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {Source} from '../models/source';
import {SourceResponse} from '../models/source-response';

@Component({
  selector: 'app-show-sources',
  templateUrl: './show-sources.component.html',
  styleUrls: ['./show-sources.component.scss']
})
export class ShowSourcesComponent implements OnInit {

  public sources: Array<Source>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getSources().subscribe((data: SourceResponse) => {
      this.sources = data.sources;
    });
  }

}
