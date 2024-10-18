import { lazy } from "react";

const SaleRegiste = lazy(() => import("../view/01_Sale/01_Sale_Regist/main"))
const SaleMagamList = lazy(() => import("../view/01_Sale/02_Sale_Magam_List/main"))

const SaleRouter = () => {
  return [
    {
      path: 'registe',
      element: <SaleRegiste />,
    },
    {
      path: 'magamList',
      element: <SaleMagamList />,
    },
  ];
}

export default SaleRouter;