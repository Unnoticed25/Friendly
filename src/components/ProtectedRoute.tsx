// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import LoadingIndicator from './LoadingIndicator/LoadingIndicator'; // Импортируем индикатор загрузки

interface ProtectedRouteProps {
    element: JSX.Element; // Ожидаем элемент, который будет отображаться
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isSignedIn, isLoaded } = useAuth();

    // Если данные еще загружаются, возвращаем индикатор загрузки
    if (!isLoaded) {
        return <LoadingIndicator />;
    }

    // Если пользователь не авторизован, перенаправляем на страницу аутентификации
    if (!isSignedIn) {
        return <Navigate to="/auth" />;
    }

    // Иначе возвращаем элемент
    return element;
};

export default ProtectedRoute;