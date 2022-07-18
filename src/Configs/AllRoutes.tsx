import { AllRoutesType } from "../Constants/Interfaces";
import { Dashboard } from "../Routes";

const AllRoutes: Array<AllRoutesType> = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
];

export default AllRoutes;
