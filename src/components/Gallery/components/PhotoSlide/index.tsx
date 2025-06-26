import styles from "./index.module.scss";
import type { IGalleryItem } from "../../../../shared/types";
import type { ReactElement } from "react";

export interface IPhotoSlide {
  slide: IGalleryItem[];
  index: number;
}

const PhotoSlide: React.FC<IPhotoSlide> = ({ slide, index }): ReactElement => {
  return (
    <div className={`${styles.slide} ${styles[`slide_${index}`]}`}>
      {slide.map((item, index) => (
        <div
          key={`image-${index}-${item.alt}`}
          className={styles.slide__container}
        >
          <img src={item.img} alt={item.alt} className={styles.slide__image} />
        </div>
      ))}
    </div>
  );
};

export default PhotoSlide;
