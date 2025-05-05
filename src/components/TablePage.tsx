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
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { useMemes } from './hooks/hooks';
import ModalEditMeme from './Modal';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import './style.css';

export default function TablePage() {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        memes,
        handleEdit,
        selectedMeme,
        setSelectedMeme,
        handleSave,
        deleteMeme,
    } = useMemes();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const actionButtons = `action-btn ${isMobile ? 'mobile' : ''}`;
    return (
        <div>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>{t('NAME')}</TableColumn>
                    <TableColumn>{t('IMAGE')}</TableColumn>
                    <TableColumn>{t('LIKES')}</TableColumn>
                    <TableColumn>{t('ACTIONS')}</TableColumn>
                </TableHeader>
                <TableBody>
                    {memes.map((meme) => {
                        const isValidImageUrl =
                            /^https?:\/\/.*\.(jpg|jpeg|png)$/i.test(meme.url);
                        return (
                            <TableRow
                                key={meme.id}
                                className="meme_hover"
                                style={{ height: '65px' }}
                            >
                                <TableCell>{meme.id}</TableCell>
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
                                                height={isMobile ? 35 : 45}
                                                src={meme.url}
                                                width={isMobile ? 35 : 45}
                                                style={
                                                    isMobile
                                                        ? { minWidth: '35px' }
                                                        : { minWidth: '45px' }
                                                }
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
                                            className={actionButtons}
                                            size="sm"
                                            onPress={() => {
                                                handleEdit(meme);
                                                onOpen();
                                            }}
                                        >
                                            {!isMobile ? (
                                                <span>{t('Edit')}</span>
                                            ) : (
                                                <FiEdit />
                                            )}
                                        </Button>
                                        <Button
                                            className={actionButtons}
                                            size="sm"
                                            onPress={() => deleteMeme(meme.id)}
                                        >
                                            {!isMobile ? (
                                                <span>{t('Delete')}</span>
                                            ) : (
                                                <AiOutlineDelete />
                                            )}
                                        </Button>
                                        <Button
                                            size="sm"
                                            className={actionButtons}
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
                                            {!isMobile ? (
                                                <span>{t('Add')}</span>
                                            ) : (
                                                <MdOutlineAddPhotoAlternate />
                                            )}
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
