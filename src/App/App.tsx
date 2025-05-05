import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Tab,
    Tabs,
} from '@heroui/react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import TablePage from '../components/TablePage';
import ListPage from '../components/ListPage';
import { AcmeLogo } from './icons';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../components/language/Select';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

export default function App() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 468 });
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState<'table' | 'list'>('table');

    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">{t('MEMES')}</p>
                </NavbarBrand>
                <NavbarContent className="sm:flex gap-4" justify="center">
                    {isMobile ? (
                        <Tabs
                            variant="light"
                            size="sm"
                            color="secondary"
                            selectedKey={selectedTab}
                            onSelectionChange={(key) => {
                                setSelectedTab(key as 'table' | 'list');
                                navigate(`/${key}-page`);
                            }}
                        >
                            <Tab key="table" title={t('Table')} />
                            <Tab key="list" title={t('List')} />
                        </Tabs>
                    ) : (
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <NavbarItem>
                                <NavLink
                                    to="/table-page"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-blue-400 font-semibold'
                                            : 'text-white hover:text-blue-300'
                                    }
                                >
                                    <span>{t('Table of memes')}</span>
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
                                    <span>{t('List of memes')}</span>
                                </NavLink>
                            </NavbarItem>
                        </div>
                    )}
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
