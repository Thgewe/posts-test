import React, {FC} from 'react';
import {Card} from "react-bootstrap";
import CommentsList from "./CommentsList";

interface IPostCardProps {
    id: string,
    userId: string,
    avatar: string,
    title: string,
    body: string,
}

const PostCard: FC<IPostCardProps> = ({
    id,
    userId,
    avatar,
    title,
    body,
}) => {

    return (
        <Card className={'mb-3 w-100'}>

            <Card.Header className={'d-flex flex-row'}>
                <Card.Img className={'border'} style={{width: '4rem', height: '4rem'}} src={'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'} />
                <Card.Title className={'align-self-center ms-2 mb-0'}>{title}</Card.Title>
            </Card.Header>
            <Card.Body>{body}</Card.Body>
            <Card.Footer>
                <CommentsList postId={id} />
            </Card.Footer>
        </Card>
    );
};

export default PostCard;