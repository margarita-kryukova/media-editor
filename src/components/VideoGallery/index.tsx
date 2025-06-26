import styles from "./index.module.scss";
import { useState, useCallback } from "react";
import Video from "./components/Video";
import Slider from "./components/Slider";
import type { IVideoItem } from "../../shared/types";

interface IVideoGalleryProps {
  videos: IVideoItem[];
}

const VideoGallery: React.FC<IVideoGalleryProps> = ({ videos = [] }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleSetActiveIdx = useCallback((idx: number) => {
    setActiveIdx(idx);
  }, []);

  const handleSetPlaying = useCallback((isPlaying: boolean) => {
    setPlaying(isPlaying);
  }, []);

  const currentVideo = videos[activeIdx];
  if (!currentVideo) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.gallery}>
        <h2 className={styles.gallery__title}>
          Поможем сделать ваш&nbsp;продукт уникальным
        </h2>
        <div className={styles["gallery-content-wrapper"]}>
          <div className={styles["gallery-content"]}>
            <div className={styles["gallery-content__video"]}>
              <Video
                key={activeIdx}
                src={currentVideo.src}
                preview={currentVideo.preview}
                playing={playing}
                setPlaying={handleSetPlaying}
              />
            </div>
            <Slider
              videos={videos}
              setActiveIdx={handleSetActiveIdx}
              setPlaying={handleSetPlaying}
              className={styles["gallery-content__slider"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
