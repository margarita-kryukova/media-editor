import styles from "./index.module.scss";

interface IHeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<IHeroSectionProps> = ({ title, description }) => (
  <section className={styles.hero}>
    <div className={styles.hero__container}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>{title}</h1>
        <p className={styles.hero__desc}>{description}</p>
      </div>
    </div>
  </section>
);
export default HeroSection;
