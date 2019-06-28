import {Source} from './source';

export class Article {
  public source: Source;
  public author: string;
  public title: string;
  public desciption: string;
  public url: string;
  public urlToImage: string;
  public publishedAt: Date;
  public content: string;
}
