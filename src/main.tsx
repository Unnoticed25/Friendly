import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/main/App.tsx';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Auth } from "./pages/auth/Auth";
import { ClerkProvider } from "@clerk/clerk-react";
import ProtectedRoute from './components/ProtectedRoute';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

//тест
const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth />, // Auth только для аутентификации
    },
    {
        path: "/",
        element: <ProtectedRoute element={<App />} />, // Защита главного маршрута
        children: [
            {
                path: "/main",
                element: <App />, // Главный компонент приложения
            },
            {
                path: "*",
                element: <Navigate to="/auth" />, // Перенаправление всех неизвестных маршрутов на auth
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <RouterProvider router={router} />
        </ClerkProvider>
    </StrictMode>,
);