import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { BrowserRouter } from 'react-router-dom';
import '../components/language/i18n.ts';
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <HeroUIProvider>
                <App />
            </HeroUIProvider>
        </BrowserRouter>
    </StrictMode>
);
