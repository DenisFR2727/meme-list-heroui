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

function ModalEditMeme({
    isOpen,
    onClose,
    selectedMeme,
    setSelectedMeme,
    handleSave,
}: ModalEditMemeProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="top">
            <ModalContent>
                <ModalHeader>Edit Meme</ModalHeader>
                <ModalBody>
                    <Input
                        label="Name"
                        value={selectedMeme?.name ?? ''}
                        onChange={(e) =>
                            setSelectedMeme((prev) =>
                                prev ? { ...prev, name: e.target.value } : prev
                            )
                        }
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
                            handleSave();
                            onClose();
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
