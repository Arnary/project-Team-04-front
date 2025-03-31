import styles from './RecipePreparation.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteRecipe,
  removeFromFavoriteRecipe,
} from '../../../redux/recipes/operations';
import SignInModal from '../../SignInModal/SignInModal';
import SignUpModal from '../../SignUpModal/SignUpModal';

const RecipePreparation = ({ instructions, isFavorite: initialFavorite, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // має бути true, якщо користувач залогінений
  const dispatch = useDispatch();

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  // Синхронізація статусу isFavorite при зміні пропса
  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      setSignInOpen(true); // лише якщо НЕ залогінений
      return;
    }

    try {
      if (isFavorite) {
        await dispatch(removeFromFavoriteRecipe(recipeId)).unwrap();
        setIsFavorite(false);
      } else {
        await dispatch(addFavoriteRecipe(recipeId)).unwrap();
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Failed to update favorites:', error);
    }
  };

  const switchToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  return (
    <section className={styles.preparationSection}>
      <h2 className={styles.title}>Recipe Preparation</h2>
      <p className={styles.instructions}>{instructions}</p>
      
      <button type="button" className={styles.favoriteBtn} onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>

      {/* Модалки */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
        onSwitchToSignUp={switchToSignUp}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToSignIn={switchToSignIn}
      />
    </section>
  );
};

export default RecipePreparation;
