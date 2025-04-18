import { Card, CardBody, CardFooter, Image, Link } from '@heroui/react';
import { useMemes } from './hooks/hooks';
import './style.css';
export default function App() {
    const { memes } = useMemes();

    return (
        <div className="list_meme gap-2 grid grid-cols-2 sm:grid-cols-4">
            {memes.map((meme, index) => (
                <Link key={meme.id} href={meme.url}>
                    <Card
                        key={index}
                        isPressable
                        shadow="sm"
                        className="card_meme"
                    >
                        <CardBody className="card_body overflow-hidden p-0">
                            <Image
                                alt={meme.name}
                                className="card_img w-full object-cover "
                                radius="lg"
                                src={meme.url}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="card_footer_text text-small justify-between">
                            <p className="card_name">{meme.name}</p>
                            <p className="card_likes text-default-500">
                                <span className="card_likes_text">Likes </span>
                                <span>{meme.likes}</span>
                            </p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
