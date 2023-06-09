export interface IPost {
    userId: string,
    id: string,
    title: string,
    body: string,
}

export interface IPostsState {
    filter: string,
    sort: undefined | boolean,
    currentPage: number,
    totalPages: number,
    postsPerPage: number,
    pending: boolean,
    errorMsg: string,
    posts: IPost[],
}