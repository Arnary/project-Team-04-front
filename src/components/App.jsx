import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AddRecipePage = lazy(() => import("../pages/AddRecipePage/AddRecipePage"));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="/recipe/add" element={<AddRecipePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
 )
};

export default App;