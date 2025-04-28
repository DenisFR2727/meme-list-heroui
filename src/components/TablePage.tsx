import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Image,
    Button,
    useDisclosure,
} from '@heroui/react';
import { useMemes } from './hooks/hooks';
import ModalEditMeme from './Modal';

export default function TablePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        memes,
        handleEdit,
        selectedMeme,
        setSelectedMeme,
        handleSave,
        deleteMeme,
    } = useMemes();

    return (
        <div>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>IMAGE</TableColumn>
                    <TableColumn>LIKES</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                    {memes.map((meme) => {
                        const isValidImageUrl =
                            /^https?:\/\/.*\.(jpg|jpeg|png)$/i.test(meme.url);
                        return (
                            <TableRow key={meme.id}>
                                <TableCell>{meme.id}</TableCell>
                                <TableCell>{meme.name}</TableCell>
                                <TableCell>
                                    {isValidImageUrl ? (
                                        <Image
                                            alt={meme.url}
                                            height={50}
                                            src={meme.url}
                                            width={50}
                                        />
                                    ) : (
                                        <span style={{ color: 'red' }}>
                                            Invalid URL
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell>{meme.likes}</TableCell>
                                <TableCell>
                                    <Button
                                        onPress={() => {
                                            handleEdit(meme);
                                            onOpen();
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button onPress={() => deleteMeme(meme.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <ModalEditMeme
                isOpen={isOpen}
                onClose={onClose}
                selectedMeme={selectedMeme}
                setSelectedMeme={setSelectedMeme}
                handleSave={() => {
                    handleSave();
                    onClose();
                }}
            />
        </div>
    );
}
