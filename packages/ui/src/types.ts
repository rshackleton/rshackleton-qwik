export interface CtaModel {
  target?: '_self' | '_blank';
  text: string;
  url: string;
}

export interface SectionModel {
  _key: string;
  _type: string;
  [prop: string]: unknown;
}

export interface SEOModel {
  description?: string;
  title: string;
}
