import {
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
    ModalFooter,
    Modal,
    Button,
} from '@heroui/react';
import { ModalEditMemeProps } from '../types/types';
import { useValidation } from '../hooks/validation_hooks';
import { useTranslation } from 'react-i18next';

function ModalEditMeme({
    isOpen,
    onClose,
    selectedMeme,
    setSelectedMeme,
    handleSave,
    nameModal,
}: ModalEditMemeProps) {
    const { t } = useTranslation();
    const { validationName, nameError, chekIsValidationURL, validationUrl } =
        useValidation();

    return (
        <Modal
            className="modal-top max-h-[100vh] overflow-y-auto"
            isOpen={isOpen}
            onClose={onClose}
            placement="top"
            scrollBehavior="inside"
        >
            <ModalContent className="max-h-[100vh] overflow-y-auto">
                <ModalHeader>
                    {nameModal ? t('Edit Meme') : t('Add meme')}
                </ModalHeader>
                <ModalBody>
                    <Input
                        label={t('NAME')}
                        value={selectedMeme?.name ?? ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSelectedMeme((prev) =>
                                prev ? { ...prev, name: value } : prev
                            );
                            validationName(value);
                        }}
                        onFocus={(e) => {
                            e.target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            });
                        }}
                        isInvalid={!!nameError}
                        errorMessage={nameError}
                    />
                    <Input
                        label={t('Image URL')}
                        value={selectedMeme?.url ?? ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSelectedMeme((prev) =>
                                prev ? { ...prev, url: value } : prev
                            );
                            chekIsValidationURL(value);
                        }}
                        onFocus={(e) => {
                            e.target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            });
                        }}
                        isInvalid={!!validationUrl}
                        errorMessage={validationUrl}
                    />
                    <Input
                        type="number"
                        label={t('LIKES')}
                        min={0}
                        max={99}
                        value={selectedMeme?.likes?.toString() ?? '0'}
                        onChange={(e) =>
                            setSelectedMeme((prev) =>
                                prev
                                    ? {
                                          ...prev,
                                          likes: Number(e.target.value),
                                      }
                                    : prev
                            )
                        }
                        onFocus={(e) => {
                            e.target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            });
                        }}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onPress={onClose} variant="light">
                        {t('Cancel')}
                    </Button>
                    <Button
                        onPress={() => {
                            if (!nameError && selectedMeme?.name) {
                                handleSave();
                                onClose();
                            }
                        }}
                        color="primary"
                    >
                        {t('Save')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
export default ModalEditMeme;
