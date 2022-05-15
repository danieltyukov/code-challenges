import React from 'react';

import Header from './header';
import '../styles/layout.css';

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <Header />
            {children}
        </div>
    );
};

export default Layout;