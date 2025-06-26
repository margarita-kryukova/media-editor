import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import styles from "./index.module.scss";
import type { IVideoItem } from "../../../../shared/types";
import SliderSlide from "../SliderSlide";

interface ISlider {
  videos: IVideoItem[];
  setActiveIdx: (arg: number) => void;
  setPlaying: (play: boolean) => void;
  className: string;
}

const Slider: React.FC<ISlider> = ({
  videos,
  setActiveIdx,
  setPlaying,
  className,
}) => {
  return (
    <Swiper
      spaceBetween={12}
      slidesOffsetAfter={16}
      slidesOffsetBefore={16}
      slidesPerView={1.86}
      breakpoints={{
        768: {
          spaceBetween: 12,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
          slidesPerView: 2.27,
        },
        1280: {
          spaceBetween: 30,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
          slidesPerView: 2,
        },
      }}
      className={`${styles.slider} ${className}`}
    >
      {videos.map((vid, i) => (
        <SwiperSlide key={vid.id}>
          <SliderSlide
            slide={vid}
            index={i}
            setActiveIdx={setActiveIdx}
            setPlaying={setPlaying}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(Slider);
