import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            헤더,레프트베너
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;