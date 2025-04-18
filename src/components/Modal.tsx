import {
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
    ModalFooter,
    Modal,
    Button,
} from '@heroui/react';
import { ModalEditMemeProps } from './types/types';
import { useMemes } from './hooks/hooks';

function ModalEditMeme({
    isOpen,
    onClose,
    selectedMeme,
    setSelectedMeme,
    handleSave,
}: ModalEditMemeProps) {
    const { validationName, nameError } = useMemes();

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="top">
            <ModalContent>
                <ModalHeader>Edit Meme</ModalHeader>
                <ModalBody>
                    <Input
                        label="Name"
                        value={selectedMeme?.name ?? ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSelectedMeme((prev) =>
                                prev ? { ...prev, name: value } : prev
                            );
                            validationName(value);
                        }}
                        isInvalid={!!nameError}
                        errorMessage={nameError}
                    />
                    <Input
                        label="Image URL"
                        value={selectedMeme?.url ?? ''}
                        onChange={(e) =>
                            setSelectedMeme((prev) =>
                                prev ? { ...prev, url: e.target.value } : prev
                            )
                        }
                    />
                    <Input
                        type="number"
                        label="Likes"
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
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onPress={onClose} variant="light">
                        Cancel
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
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
export default ModalEditMeme;
