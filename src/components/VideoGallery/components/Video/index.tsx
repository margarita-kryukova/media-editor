import React, { useCallback, useMemo } from "react";
import styles from "./index.module.scss";
import Play from "../../../../shared/icons/play.svg?react";
import type { IImage } from "../../../../shared/types";

interface IVideoType {
  type: string;
  src: string;
}

export interface IVideo {
  src: IVideoType[];
  preview: IImage;
}

interface IVideoComponentProps extends IVideo {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}

const Video: React.FC<IVideoComponentProps> = ({
  src,
  preview,
  playing,
  setPlaying,
}) => {
  const handlePlay = useCallback(() => setPlaying(true), [setPlaying]);

  const videoSources = useMemo(
    () =>
      src.map((source, index) => (
        <source
          key={`${source.type}-${index}`}
          src={source.src}
          type={source.type}
        />
      )),
    [src]
  );

  return (
    <div className={styles["video__container"]}>
      {playing ? (
        <video
          controls
          autoPlay
          muted
          poster={preview.jpg}
          width="100%"
          className={styles["video__player"]}
        >
          {videoSources}
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      ) : (
        <button
          onClick={handlePlay}
          aria-label="Воспроизвести видео"
          tabIndex={0}
          className={styles["video__preview-wrapper"]}
        >
          <picture>
            <source srcSet={preview.webp} type="image/webp" />
            <img src={preview.jpg} alt="Видеопревью" loading="lazy" />
          </picture>
          <span className={styles["video__btn"]}>
            <Play className={styles["video__btn-icon"]} />
          </span>
        </button>
      )}
    </div>
  );
};

export default React.memo(Video);
