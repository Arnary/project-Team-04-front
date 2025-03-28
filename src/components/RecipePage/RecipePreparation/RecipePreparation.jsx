import styles from './RecipePreparation.module.css';

const RecipePreparation = ({ instructions, isFavorite }) => {
  return (
    <section className={styles.preparationSection}>
      <h2 className={styles.title}>Recipe Preparation</h2>
      <p className={styles.instructions}>{instructions}</p>
      <button type="button" className={styles.favoriteBtn}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </section>
  );
};

export default RecipePreparation;
