 import { lazy } from "react";

 const Order_Registe = lazy(() => import ("../view/02_Order/01_Order_Regist/main.js"));
 const Order_List = lazy(() => import ("../view/02_Order/02_Order_List/main.js"));

 


const OrderRouter = () => {
  return [
    {
      path: 'registe',
      element: <Order_Registe />,
    },
    {
      path: 'list',
      element: <Order_List />,
    },
  ];
}

export default OrderRouter;