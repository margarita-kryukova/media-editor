import { useState, useMemo } from "react";
import type { ITariff } from "../../shared/types";
import styles from "./index.module.scss";
import Switch from "../../shared/ui/Switch";
import Button from "../../shared/ui/Button";
import { formatPrice } from "../../shared/helpers/formatPrice";

interface ITariffsSectionProps {
  tariffs: ITariff[];
}

const TariffsSection: React.FC<ITariffsSectionProps> = ({ tariffs }) => {
  const [isYear, setIsYear] = useState(true);

  const renderedTariffs = useMemo(() => {
    return tariffs.map((tariff, index) => (
      <li key={`${tariff.name}-${index}`} className={styles.tariff}>
        <div
          className={styles.tariff__image}
          style={{ backgroundImage: `url(${tariff.image.jpg})` }}
        />
        <div className={styles.tariff__body}>
          <div className={styles.tariff__info}>
            <div className={styles.tariff__header}>
              <span>{tariff.name}</span>
              <span>
                {isYear
                  ? `${formatPrice(tariff.priceYear)} ₽`
                  : `${formatPrice(tariff.priceMonth)} ₽`}
              </span>
            </div>

            <p className={styles.tariff__desc}>{tariff.desc}</p>
          </div>

          <Button
            text="Начать бесплатно"
            typeButton={tariff.btnAccent ? "primary" : "secondary"}
            className={styles.tariff__btn}
          />
        </div>
      </li>
    ));
  }, [tariffs, isYear]);

  return (
    <section className={styles.tariffs}>
      <div className={styles.tariffs__container}>
        <div className={styles.tariffs__header}>
          <h2 className={styles.tariffs__title}>У нас есть два тарифа</h2>
          <Switch
            checked={isYear}
            onChange={() => setIsYear(!isYear)}
            leftLabel="Месяц"
            rightLabel="Год"
            className={styles.tariffs__switcher}
            name="Тарифы"
            id="tariffs"
          />
        </div>
        <ul className={styles.tariffs__list}>{renderedTariffs}</ul>
      </div>
    </section>
  );
};

export default TariffsSection;
