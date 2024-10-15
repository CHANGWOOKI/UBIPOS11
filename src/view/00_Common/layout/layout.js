import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../../../components/layout/header/header";
import SideMenu from "../../../components/layout/sideMenu/sideMenu";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="main-container">
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;