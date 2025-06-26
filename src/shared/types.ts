export interface IImage {
  jpg: string;
  jpgDesk?: string;
  webp: string;
}

export interface IHero {
  title: string;
  description: string;
}

export interface IGalleryItem {
  img: string;
  alt: string;
}

export interface IVideoSource {
  type: string;
  src: string;
}

export interface IVideoItem {
  id: number;
  preview: IImage;
  src: IVideoSource[];
  title: string;
  description: string;
}

export interface ITariff {
  name: string;
  priceMonth: number;
  priceYear: number;
  btnAccent: boolean;
  image: IImage;
  desc: string;
}

export interface IAboutListItem {
  icon: string;
  title: string;
  description: string;
}

export interface IAboutSection {
  title: string;
  description: string;
  list: IAboutListItem[];
  image: string;
}

export interface INavigationItem {
  href: string;
  value: string;
}
