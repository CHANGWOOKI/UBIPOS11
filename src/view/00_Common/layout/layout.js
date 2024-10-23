import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../../../components/layout/header/header";
import SideMenu from "../../../components/layout/sideMenu/sideMenu";
import Tabs from "../../../components/layout/tabs/Tabs"
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="main-container">
        <Header />
          <div className='tab-container'>
            <Tabs />              
        <main className="content">
          <Outlet />
        </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;