import { createBrowserRouter } from "react-router-dom";

import SaleRouter from "./saleRouter";
import OrderRouter from "./orderRouter";
import MoveRouter from "./moveRouter";
import StockRouter from "./stockRouter";
import Login from "../login/login";
import Layout from "../view/00_Common/layout/layout"
import Main from "../view/00_Common/main"





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
        ],
    },
]);

export default Root;
