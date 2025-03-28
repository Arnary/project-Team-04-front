import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import AppLayout from "./AppLayout/AppLayout";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Categories = lazy(() => import("../components/Categories/Categories"));
const Recipes = lazy(() => import("../components/Recipes/Recipes"));
const RecipePage = lazy(() => import("../pages/RecipePage/RecipePage"));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Categories />} />
            <Route path='recipes' element={<Recipes />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/recipe/add" element={<AddRecipePage />} />
          <Route path="recipe/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </AppLayout>
  );
}

export default App;
