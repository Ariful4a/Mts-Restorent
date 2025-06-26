
import { Outlet } from 'react-router';
import Header from '../Shered/Header/Header';
import Footer from '../Shered/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;