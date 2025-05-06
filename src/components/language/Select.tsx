import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';
import i18n from 'i18next';
const languages = [
    { key: 'en', label: 'EN' },
    { key: 'uk', label: 'UK' },
];
type Language = 'en' | 'uk';

const LANGUAGE_STORAGE_KEY = 'LANGUAGE_STORAGE';

function SelectLanguage() {
    const [lang, setLang] = useState<Language>(() => {
        const stored = localStorage.getItem(
            LANGUAGE_STORAGE_KEY
        ) as Language | null;
        const initial = stored && ['en', 'uk'].includes(stored) ? stored : 'en';
        i18n.changeLanguage(initial);
        return initial;
    });

    useEffect(() => {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }, [lang]);
    return (
        <Select
            variant="flat"
            radius="full"
            size="sm"
            style={{ width: '70px' }}
            placeholder="Language"
            color="secondary"
            selectedKeys={new Set([lang])}
            onSelectionChange={(keys) => {
                const selected =
                    typeof keys === 'string' ? keys : Array.from(keys)[0];
                if (typeof selected === 'string') {
                    setLang(selected as Language);
                    i18n.changeLanguage(selected);
                }
            }}
            renderValue={(items) => {
                const item = items[0];
                if (!item) return null;
                switch (item.key) {
                    case 'en':
                        return 'En';
                    case 'uk':
                        return 'Uk';
                    default:
                        return item.textValue;
                }
            }}
        >
            {languages.map((lang) => (
                <SelectItem key={lang.key} textValue={lang.label}>
                    {lang.label}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SelectLanguage;
