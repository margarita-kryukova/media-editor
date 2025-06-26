import { useState, useCallback } from "react";
import Button from "../../shared/ui/Button";
import styles from "./index.module.scss";
import Modal from "../../shared/ui/Modal";
import FormRequest from "../FormRequest";
import type { IAboutSection } from "../../shared/types";

const AboutSection: React.FC<IAboutSection> = ({
  title,
  description,
  list,
  image,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__content}>
          <h1 className={styles.about__title}>{title}</h1>
          <p className={styles.about__desc}>{description}</p>
          <Button
            className={styles.about__btn}
            text="Подробнее"
            onClick={handleOpenModal}
          />

          <div className={styles.about__features}>
            {list.map((item) => (
              <div className={styles.about__feature} key={item.title}>
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  className={styles.feature__icon}
                />
                <div className={styles.feature__content}>
                  <h5 className={styles.feature__title}>{item.title}</h5>
                  <p className={styles.feature__desc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.about__image}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      {isOpenModal ? (
        <Modal onClose={handleCloseModal}>
          <FormRequest />
        </Modal>
      ) : null}
    </section>
  );
};

export default AboutSection;
