import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator.tsx';

interface ProtectedRouteProps {
    element: JSX.Element;
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