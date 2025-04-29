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
    Link,
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
                    {memes.map((meme, index) => {
                        const isValidImageUrl =
                            /^https?:\/\/.*\.(jpg|jpeg|png)$/i.test(meme.url);
                        return (
                            <TableRow
                                key={meme.id}
                                className="meme_hover"
                                style={{ height: '65px' }}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell
                                    style={{
                                        overflow: 'hidden',
                                        textWrap: 'nowrap',
                                    }}
                                >{`${meme.name
                                    .replace(/\./g, '')
                                    .slice(0, 10)}`}</TableCell>
                                <TableCell>
                                    {isValidImageUrl ? (
                                        <Link href={meme.url} target="_blank">
                                            <Image
                                                alt={meme.url}
                                                height={45}
                                                src={meme.url}
                                                width={45}
                                                style={{ minWidth: '45px' }}
                                            />
                                        </Link>
                                    ) : (
                                        <span style={{ color: 'red' }}>
                                            Invalid URL
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell>{meme.likes}</TableCell>
                                <TableCell>
                                    <div className="actions_btns">
                                        <Button
                                            size="sm"
                                            onPress={() => {
                                                handleEdit(meme);
                                                onOpen();
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="del_meme_btn"
                                            onPress={() => deleteMeme(meme.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="add_meme_btn"
                                            onPress={() => {
                                                setSelectedMeme({
                                                    id: 0,
                                                    name: '',
                                                    url: '',
                                                    likes: 0,
                                                });
                                                onOpen();
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </div>
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
