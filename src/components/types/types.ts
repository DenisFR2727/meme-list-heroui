import { Dispatch, SetStateAction } from 'react';
import { Memes } from '../../data/type';

export type ModalEditMemeProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedMeme: Memes | null;
    setSelectedMeme: Dispatch<SetStateAction<Memes | null>>;
    handleSave: () => void | Promise<void>;
    nameModal: boolean;
};
