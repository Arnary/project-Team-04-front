import styles from './RecipeIngredients.module.css';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ingredients</h2>
      <ul className={styles.list}>
        {ingredients.map(({ id, name, quantity, image }) => (
          <li key={id} className={styles.item}>
            <span className={styles.ingridientImg}>
              <img
              className={styles.image}
              src={image || '/img/placeholder.png'}
              alt={name}
            />
            </span>
            <span className={styles.indridientName}>
              <span className={styles.name}>{name}</span>
              <span className={styles.quantity}>{quantity}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeIngredients;
