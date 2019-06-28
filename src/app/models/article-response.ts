import {Article} from './article';

export class ArticleResponse {
  public status: string;
  public totalResults: number;
  public articles: Article[];
}
