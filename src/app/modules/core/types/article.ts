export interface Article {
  imageUrl: string,
  date: Date;
  title: string;
  shortTitle?: string;
  description: string;
  target?: string;
}
