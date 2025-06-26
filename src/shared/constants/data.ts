import type {
  IGalleryItem,
  IVideoItem,
  ITariff,
  IAboutSection,
  IHero,
} from "../types";
import { getImagePath } from "../helpers/getImagePath";

export const HERO_CONTENT: IHero = {
  title: "Превратите свои идеи в реальные достижения",
  description:
    "Теперь у вас под рукой всегда есть нужные изображения, видео, музыка, 3D-модели, редакционные материалы и авторские продукты.",
};

export const GALLERY_DATA: IGalleryItem[][] = [
  [
    {
      img: getImagePath("images/gallery_1.jpg"),
      alt: "img 1",
    },
    {
      img: getImagePath("images/gallery_4.jpg"),
      alt: "img 4",
    },
  ],
  [
    {
      img: getImagePath("images/gallery_2.jpg"),
      alt: "img 2",
    },
    {
      img: getImagePath("images/gallery_5.jpg"),
      alt: "img 5",
    },
  ],
  [
    {
      img: getImagePath("images/gallery_3.jpg"),
      alt: "img 3",
    },
    {
      img: getImagePath("images/gallery_6.jpg"),
      alt: "img 6",
    },
  ],
];

export const VIDEOS_DATA: IVideoItem[] = [
  {
    id: 1,
    preview: {
      jpg: getImagePath("images/video_1.jpg"),
      webp: "",
    },
    src: [
      {
        type: "video/webm",
        src: getImagePath("video/video_1.webm"),
      },
      {
        type: "video/mp4",
        src: getImagePath("video/video_1.mp4"),
      },
    ],
    title: "ЭКСКЛЮЗИВ",
    description: "Используйте уникальный контент в своих целях",
  },
  {
    id: 2,
    preview: {
      jpg: getImagePath("images/video_2.jpg"),
      webp: "",
    },
    src: [
      {
        type: "video/webm",
        src: getImagePath("video/video_2.webm"),
      },
      {
        type: "video/mp4",
        src: getImagePath("video/video_2.mp4"),
      },
    ],
    title: "ВЫСОКОЕ КАЧЕСТВО",
    description: "Изображения и видео в высоком качестве",
  },
  {
    id: 3,
    preview: {
      jpg: getImagePath("images/video_3.jpg"),
      webp: "",
    },
    src: [
      {
        type: "video/webm",
        src: getImagePath("video/video_3.webm"),
      },
      {
        type: "video/mp4",
        src: getImagePath("video/video_3.mp4"),
      },
    ],
    title: "ТВОРЧЕСТВО",
    description: "Откройте для себя вдохновляющие истории",
  },
];

export const TARIFFS_DATA: ITariff[] = [
  {
    name: "Оптимальный",
    priceMonth: 100,
    priceYear: 500,
    btnAccent: true,
    image: {
      jpg: getImagePath("images/tariff-opt.jpg"),
      webp: getImagePath("images/tariff-opt.webp"),
    },
    desc: "Редактируйте фото и видео в режиме онлайн. Создавайте одностраничные сайты из готовых компонентов",
  },
  {
    name: "Профи",
    priceMonth: 200,
    priceYear: 1000,
    btnAccent: false,
    image: {
      jpg: getImagePath("images/tariff-profi.jpg"),
      webp: getImagePath("images/tariff-profi.webp"),
    },
    desc: "Редактируйте фото и видео в режиме онлайн. Создавайте одностраничные и многостраничные сайты из готовых компонентов",
  },
];

export const ABOUT_DATA: IAboutSection = {
  title: "Создавайте свои сайты в пару кликов",
  description:
    "Мы создали новый продукт, который поможет дизайнерам, разработчикам и небольшим стартапам создать свой сайт быстро и просто.",
  list: [
    {
      icon: getImagePath("icons/bootstrap.svg"),
      title: "Bootstrap 4",
      description:
        "HTML верстка основана на одном из самых распространенных и надежных фреймворков",
    },
    {
      icon: getImagePath("icons/html5.svg"),
      title: "HTML5 & CSS3",
      description:
        "Для достижения наилучшего результата мы использовали только проверенные временем технологии.",
    },
  ],
  image: getImagePath("images/about.jpg"),
};

export const NAVIGATION_DATA = [
  {
    href: "#",
    value: "Изображения",
  },
  {
    href: "#",
    value: "Видео",
  },
  {
    href: "#",
    value: "3D модели",
  },
];
