
import { Outlet } from 'react-router-dom';
import Navbar from '../non-outlets/Navbar';
import Footer from '../non-outlets/Footer';


export default function AdminLayout() {
    return (
        <div className="admin-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}
