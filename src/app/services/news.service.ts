import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {
  }

  showAlert() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b81021b4d9704615af3ed9c6e754d6d0');
  }
}
