import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard'>Content's List</Link></li>
                        <li><Link to='/dashboard/add-content'>Add a Content</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;