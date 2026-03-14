import React, { createContext, useContext,useState, type ReactNode } from 'react';

interface ToastContextType {
    isToastVisible: boolean;
    showToast: () => void;
    hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [isToastVisible, setIsToastVisible] = useState(false);

    const showToast = () => setIsToastVisible(true);
    const hideToast = () => setIsToastVisible(false);

    return (
        <ToastContext.Provider value={{ isToastVisible, showToast, hideToast }}>
            {children}
        </ToastContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToastVisible = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToastVisible must be used within a ToastProvider');
    }
    return context;
};