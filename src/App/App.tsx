import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { Routes, Route, NavLink } from 'react-router-dom';
import TablePage from '../components/TablePage';
import ListPage from '../components/ListPage';
import { AcmeLogo } from './icons';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../components/language/Select';

export default function App() {
    const { t } = useTranslation();
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">{t('MEMES')}</p>
                </NavbarBrand>
                <NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <NavLink
                            to="/table-page"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-400 font-semibold'
                                    : 'text-white hover:text-blue-300'
                            }
                        >
                            {t('Table of memes')}
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <NavLink
                            to="/list-page"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-400 font-semibold'
                                    : 'text-white hover:text-blue-300'
                            }
                        >
                            {t('List of memes')}
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <SelectLanguage />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <main>
                <Routes>
                    <Route path="/table-page" element={<TablePage />} />
                    <Route path="/list-page" element={<ListPage />} />
                </Routes>
            </main>
        </>
    );
}
