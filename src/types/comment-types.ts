export interface IComment {
    postId: string,
    id: string,
    email: string,
    body: string,
}

export interface IComments {
    comments: IComment[],
    errorMsg: string,
    pending: boolean,
}

export interface ICommentsState {
    byPostId: {
        [index: string]: IComments,
    },
    postIds: string[],
}