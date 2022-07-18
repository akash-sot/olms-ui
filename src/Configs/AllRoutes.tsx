import { AllRoutesType } from "../Constants/Interfaces";
import { Dashboard, Login } from "../Routes";

const AllRoutes: Array<AllRoutesType> = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/",
    component: <Login />,
  },
];

export default AllRoutes;
