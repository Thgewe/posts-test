import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {layout_routes, routes} from "../routes";
import Layout from "./Layout";
import {POSTS_ROUTE} from "../utils/constants";

const AppRouter = () => {
    return <Routes>
        <Route element={<Layout />}>
            {
                layout_routes.map(({name, path, element}) =>
                    <Route key={name} path={path} element={element}/>)
            }
            <Route path={'*'} element={<Navigate to={POSTS_ROUTE} />}/>
        </Route>
        {
            routes.map(({name, path, element}) =>
                <Route key={name} path={path} element={element}/>)
        }
    </Routes>
};

export default AppRouter;