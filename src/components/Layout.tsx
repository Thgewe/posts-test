import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            Layout
            <Outlet />
        </>
    );
};

export default Layout;