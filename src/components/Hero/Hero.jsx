import styles from './Hero.module.css';
import style from '../App.module.css';
import heroImg1x from '../../img/dish.png';
import heroImg2x from '../../img/dish-2x.png';
import dishImg1x from '../../img/hero-image.png';
import dishImg2x from '../../img/hero-image-2x.png';

const Hero = ( {onAddRecipeClick} ) => {
  return (
    <section className={styles.hero}>
      <div className={style.container}>
        <h1 className={styles.title}>IMPROVE YOUR CULINARY TALENTS</h1>

        <p className={styles.subtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines.
        </p>

        <button className={styles.button} onClick={onAddRecipeClick}>ADD RECIPE</button>

        <div className={styles.images}>
          <img
            className={styles.imageMain}
            src={heroImg1x}
            srcSet={`${heroImg2x} 2x`}
            alt="Main dish"
          />
          <img
            className={styles.imageSecondary}
            src={dishImg1x}
            srcSet={`${dishImg2x} 2x`}
            alt="Dessert"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
