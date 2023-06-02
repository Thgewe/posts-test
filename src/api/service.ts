import axios from "axios";
import {IPost} from "../types/post-types";

class apiService {
    static _apiBase = 'https://jsonplaceholder.typicode.com/'

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

    static async getPosts(page: number) {
        return await this.delay(async () => {
            return await axios.get(this._apiBase + 'posts', {
                params: {_page: page}
            })
                .then((res) => {
                    return res.data as IPost[];
                });
        })
    }
}

export default apiService;