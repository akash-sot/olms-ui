export interface AllRoutesType {
  path: string;
  component: any;
  subRoutes?: Array<AllRoutesType>;
}
