import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'Table of memes': 'Table of memes',
            'List of memes': 'List of memes',
            Edit: 'Edit',
            Delete: 'Delete',
            Add: 'Add',
            MEMES: 'MEMES',
            NAME: 'NAME',
            IMAGE: 'IMAGE',
            LIKES: 'LIKES',
            ACTIONS: 'ACTIONS',
            'Edit Meme': 'Edit Meme',
            'Image URL': 'Image URL',
            Cancel: 'Cancel',
            Save: 'Save',
        },
    },
    uk: {
        translation: {
            'Table of memes': 'Таблиця мемів',
            'List of memes': 'Список мемів',
            Edit: 'Змінити',
            Delete: 'Видалити',
            Add: 'Додати',
            MEMES: 'Меми',
            NAME: "ім'я",
            IMAGE: 'Зображення',
            LIKES: 'Лайки',
            ACTIONS: 'Діяльність',
            'Edit Meme': 'Редагувати меми',
            'Image URL': 'URL зображення',
            Cancel: 'Скасувати',
            Save: 'Зберігти',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
