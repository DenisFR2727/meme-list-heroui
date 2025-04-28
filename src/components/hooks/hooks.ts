import { useEffect, useState } from 'react';
import { memes as initialMemes } from '../../data/memes';
import { Memes } from '../../data/type';
import { useDisclosure } from '@heroui/react';

const LOCAL_STORAGE_KEY = 'memes-storage';

export function useMemes() {
    const { onOpen, onClose } = useDisclosure();
    const [memes, setMemes] = useState<Memes[]>(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : initialMemes;
    });
    const [selectedMeme, setSelectedMeme] = useState<Memes | null>(null);
    const [nameError, setNameError] = useState<string>('');

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memes));
    }, [memes]);

    const handleEdit = (meme: Memes) => {
        setSelectedMeme(meme);
        onOpen();
    };
    const handleSave = (): void => {
        if (selectedMeme) {
            setMemes((prev) =>
                prev.map((m) => (m.id === selectedMeme.id ? selectedMeme : m))
            );
        }
        onClose();
    };
    const validationName = (value: string): void => {
        if (value.length < 3) {
            setNameError('Name must be at least 3 characters.');
        } else if (value.length > 100) {
            setNameError('Name must be less than or equal to 100 characters.');
        } else {
            setNameError('');
        }
    };
    const deleteMeme = (IdMeme: number): void => {
        const deleteMeme = memes.filter((meme) => meme.id !== IdMeme);
        setMemes(deleteMeme);
    };
    return {
        memes,
        handleEdit,
        handleSave,
        selectedMeme,
        setSelectedMeme,
        validationName,
        nameError,
        deleteMeme,
    };
}
