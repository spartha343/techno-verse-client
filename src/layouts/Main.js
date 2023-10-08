import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='my-5 mx-3'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;