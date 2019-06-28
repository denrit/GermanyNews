import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SourceResponse} from '../models/source-response';
import {HeadlineResponse} from '../models/headline-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {
  }

  public source: string;

  getArticles() {
    return this.http.get<HeadlineResponse>('https://newsapi.org/v2/top-headlines?country=us&apiKey=b81021b4d9704615af3ed9c6e754d6d0');
  }

  getSources() {
    return this.http.get<SourceResponse>('https://newsapi.org/v2/sources?country=de&apiKey=b81021b4d9704615af3ed9c6e754d6d0');
  }

  getHeadlinesFromSource() {
    return this.http.
    get<HeadlineResponse>(`https://newsapi.org/v2/top-headlines?sources=${this.source}&apiKey=b81021b4d9704615af3ed9c6e754d6d0`);
  }

}
