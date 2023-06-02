export interface IPost {
    userId: string,
    id: string,
    title: string,
    body: string,
}

export interface IPosts {
    byId: {
        [index: string]: IPost
    },
    allIds: string[],
}

export interface IPostsState {
    currentPage: number,
    totalPosts: number,
    postsPerPage: number,
    pending: boolean,
    errorMsg: string,
    posts: IPosts,
    isNoMorePosts: boolean,
}