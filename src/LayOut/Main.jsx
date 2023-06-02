import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import NAvBar from "../Pages/shared/NavBar/NAvBar";

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            {noHeaderFooter || <NAvBar></NAvBar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;