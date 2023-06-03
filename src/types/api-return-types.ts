import {IPost} from "./post-types";

export interface IGetPosts {
    posts: IPost[],
    totalPosts: number,
}