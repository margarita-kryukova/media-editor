import styles from "./index.module.scss";
import type { IVideoItem } from "../../../../shared/types";
import Play from "../../../../shared/icons/play.svg?react";
import React, { useCallback } from "react";

interface ISliderSlide {
  slide: IVideoItem;
  index: number;
  setActiveIdx: (ind: number) => void;
  setPlaying: (play: boolean) => void;
}

const SliderSlide: React.FC<ISliderSlide> = ({
  slide,
  index,
  setActiveIdx,
  setPlaying,
}) => {
  const handleClick = useCallback(() => {
    setActiveIdx(index);
    setPlaying(true);
  }, [index, setActiveIdx, setPlaying]);
  return (
    <div className={styles.slide} onClick={handleClick} tabIndex={0}>
      <div className={styles.slide__preview}>
        <picture>
          <source srcSet={slide.preview.webp} type="image/webp" />
          <img
            src={slide.preview.jpg}
            alt={slide.title}
            loading="lazy"
            className={styles["slide__preview-img"]}
          />
        </picture>
        <Play className={styles.slide__btn} />
      </div>
      <div className={styles.slide__content}>
        <div className={styles.slide__title}>{slide.title}</div>
        <div className={styles.slide__desc}>{slide.description}</div>
      </div>
    </div>
  );
};

export default React.memo(SliderSlide);
