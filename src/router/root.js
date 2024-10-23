import { createBrowserRouter } from "react-router-dom";

import Login from "../login/login";
import Main from "../view/00_Common/main/main";
import Layout from "../view/00_Common/layout/layout"
import Empty from "../components/layout/header/empty"; // Empty 컴포넌트 import 추가

import SaleRouter from "./saleRouter";
import OrderRouter from "./orderRouter";
import MoveRouter from "./moveRouter";
import StockRouter from "./stockRouter";
import CustRouter from "./custRouter";

const Root = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'main',
                element: <Main />
            },
            {
                path: 'empty', 
                element: <Empty />
            },
            {
                path: 'sale',
                children: SaleRouter(),
            },
            {
                path: 'order',
                children: OrderRouter(),
            },
            {
                path: 'move',
                children: MoveRouter(),
            },
            {
                path: 'stock',
                children: StockRouter(),
            },
            {
                path: 'cust',
                children: CustRouter(),
            },
        ],
    },
]);

export default Root;