import {Headline} from './headline';

export class HeadlineResponse {
  public status: string;
  public totalResults: number;
  public articles: Headline[];
}
