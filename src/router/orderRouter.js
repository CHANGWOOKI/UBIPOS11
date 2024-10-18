import { lazy } from "react";

const OrderRegiste = lazy(() => import("../view/02_Order/01_Order_Regist/main"))
const OrderList = lazy(() => import("../view/02_Order/02_Order_List/main"))




const OrderRouter = () => {
  return [
    {
      path: 'registe',
      element: <OrderRegiste />,
    },
    {
      path: 'list',
      element: <OrderList />,
    },
  ];
}

export default OrderRouter;