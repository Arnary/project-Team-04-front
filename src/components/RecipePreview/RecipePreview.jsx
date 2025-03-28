const RecipePreview = ({ recipe }) => {
  const { id, title, description, thumb } = recipe;
  return <div>{title}</div>;
};

export default RecipePreview;
