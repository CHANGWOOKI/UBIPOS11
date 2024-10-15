import { Outlet } from "react-router-dom";
import LeftNav from "./leftNav";

const Layout = () => {
    return (
        <>
            <LeftNav /> 
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;