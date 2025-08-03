
import { Outlet, useLocation } from 'react-router';
import Header from '../Shered/Header/Header';
import Footer from '../Shered/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderAndNOFooter = location.pathname.includes('login');
    return (
        <div>
            {noHeaderAndNOFooter || <Header></Header>}
            <Outlet></Outlet>
        {noHeaderAndNOFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;