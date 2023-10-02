import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import './index.scss';

const Layout = () => {
    return (
    <div className="o-app">
        <Nav/>
        <div className="o-app__page">
            <Outlet />
        </div>
    </div>
)}

export default Layout