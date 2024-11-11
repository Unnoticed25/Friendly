import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Layout from './pages/main/Layout.tsx';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import {Auth} from "./pages/auth/Auth";
import {ClerkProvider} from "@clerk/clerk-react";
import ProtectedRoute from './pages/ProtectedRoute';
import {Provider} from 'react-redux';
import store from './store/store';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

//тест
const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth/>, // Auth только для аутентификации
    },
    {
        path: "/",
        element: <ProtectedRoute element={<Layout/>}/>, // Защита главного маршрута
        children: [
            {
                path: "/main",
                element: <Layout/>, // Главный компонент приложения
            },
            {
                path: "*",
                element: <Navigate to="/auth"/>, // Перенаправление всех неизвестных маршрутов на auth
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
                <RouterProvider router={router}/>
            </ClerkProvider>
        </Provider>
    </StrictMode>,
);