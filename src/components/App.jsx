import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SharedLayout from './SharedLayout/SharedLayout';
import AppLayout from "./AppLayout/AppLayout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RecipePage = lazy(() => import("../pages/RecipePage/RecipePage"));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="recipe/:id" element={<RecipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
