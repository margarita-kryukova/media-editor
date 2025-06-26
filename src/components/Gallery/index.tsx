import { type ReactElement } from "react";
import { useMemo } from "react";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSlide from "./components/PhotoSlide";
import type { IGalleryItem } from "../../shared/types";
import "swiper/css";

interface IGalleryProps {
  slider: IGalleryItem[][];
}

const Gallery: React.FC<IGalleryProps> = ({ slider }): ReactElement => {
  const swiperConfig = useMemo(
    () => ({
      spaceBetween: 12,
      slidesPerView: "auto" as const,
      slidesPerGroup: 1,
      speed: 1500,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      breakpoints: {
        768: {
          spaceBetween: 12,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        1280: {
          spaceBetween: 30,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },
    }),
    []
  );

  return (
    <section className={styles["slider-wrapper"]}>
      <div className={styles.slider}>
        <Swiper {...swiperConfig}>
          {slider.map((item: IGalleryItem[], i: number) => (
            <SwiperSlide key={`slide-${i}`} className={styles.slider__slide}>
              <PhotoSlide slide={item} index={(i % 3) + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
