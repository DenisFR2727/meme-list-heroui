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
    const isActiveClass = ({ isActive }: { isActive: boolean }) =>
        !isActive ? 'page-default' : 'page-active';

    return (
        <>
            <Navbar>
                <NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">{t('MEMES')}</p>
                    </NavbarBrand>
                    {isMobile ? (
                        <Tabs
                            className="tab-menu"
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
                                    className={isActiveClass}
                                >
                                    <span>{t('Table of memes')}</span>
                                </NavLink>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <NavLink
                                    to="/list-page"
                                    className={isActiveClass}
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
            <main className="main_meme">
                <Routes>
                    <Route path="/" element={<TablePage />} />
                    <Route path="/table-page" element={<TablePage />} />
                    <Route path="/list-page" element={<ListPage />} />
                </Routes>
            </main>
        </>
    );
}
