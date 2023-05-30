import {IRoute} from "./types/route-types";
import {ABOUT_ROUTE, POSTS_ROUTE, USER_ROUTE} from "./utils/constants";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import UserPage from "./pages/UserPage";

export const layout_routes: IRoute[] = [
    {
        name: 'about',
        path: ABOUT_ROUTE,
        element: <AboutPage />
    },
    {
        name: 'posts',
        path: POSTS_ROUTE,
        element: <PostsPage />
    },
]
export const routes: IRoute[] = [
    {
        name: 'user',
        path: USER_ROUTE,
        element: <UserPage />
    },
]