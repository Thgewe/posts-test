import axios from "axios";
import {IPost} from "../types/post-types";
import {IComment} from "../types/comment-types";
import {IGetPosts} from "../types/api-return-types";

class apiService {
    static _apiBase = 'https://jsonplaceholder.typicode.com/';

    // Искусственная задержка в 500мс
    private static async delay(callback: Function) {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve(0);
            }, 500)
        }).then(() => {
            return callback();
        })
    }

    static async getFilteredPosts(page: number, filter: string, sort: boolean = false): Promise<IGetPosts> {
        return await this.delay(async () => {
            return await axios.get(this._apiBase + 'posts', {
                params: sort
                    ? {
                        _page: page,
                        title_like: filter,
                        _sort: 'title',
                    }
                    : {
                        _page: page,
                        title_like: filter
                    }
            })
                .then((res) => {
                    return {
                        posts: res.data as IPost[],
                        totalPosts: parseInt(res.headers['x-total-count']),
                    }
                })
        })
    }

    static async getCommentsByPostId(postId: string): Promise<IComment[]> {
        return await this.delay(async () => {
            return await axios.get(this._apiBase + 'comments', {
                params: {postId}
            }).then((res) => {
                return res.data as IComment[];
            });
        })
    }
}

export default apiService;