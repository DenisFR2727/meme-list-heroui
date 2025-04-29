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

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memes));
    }, [memes]);

    const handleEdit = (meme: Memes) => {
        setSelectedMeme(meme);
        onOpen();
    };
    // Edit and Add Memes
    const handleSave = (): void => {
        if (!selectedMeme) return;
        if (!selectedMeme.id) {
            const newMeme = { ...selectedMeme, id: Date.now() };

            setMemes((prev) => [...prev, newMeme]);
        } else {
            setMemes((prev) =>
                prev.map((m) => (m.id === selectedMeme.id ? selectedMeme : m))
            );
        }
        onClose();
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
        deleteMeme,
    };
}
