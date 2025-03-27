import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SharedLayout from "./SharedLayout/SharedLayout";
import AppLayout from "./AppLayout/AppLayout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} /> {/* Вкладений маршрут */}
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
