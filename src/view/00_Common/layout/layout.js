import { Outlet } from "react-router-dom";
import LeftNav from "./leftNav";

import Header from "./header";

const Layout = () => {
    return (
        <>
          <Header /  
          <LeftNav /> 
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;