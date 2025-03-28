import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import AppLayout from "./AppLayout/AppLayout";
import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Categories = lazy(() => import("../components/Categories/Categories"));
const Recipes = lazy(() => import("../components/Recipes/Recipes"));

function App() {

  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Categories />} />
            <Route path='recipes' element={<Recipes />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </AppLayout>
  );
}

export default App;
