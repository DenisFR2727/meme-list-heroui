import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@heroui/react';
import { Memes } from '../../data/type';
import './style.css';
type InfoImageModalProps = {
    currentMemeInfo: Memes | null;
    isOpen: boolean;
    onClose: () => void;
};

function InfoImageModal({
    currentMemeInfo,
    isOpen,
    onClose,
}: InfoImageModalProps) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onClose}
                className="modal-top"
                placement="top"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Name meme
                            </ModalHeader>
                            <ModalBody className="image-modal">
                                <Image
                                    isZoomed
                                    alt="image"
                                    src={currentMemeInfo?.url}
                                    width={240}
                                    disableSkeleton
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default InfoImageModal;
