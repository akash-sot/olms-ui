import { Routes, Route } from "react-router-dom";
import AllRoutes from "./Configs/AllRoutes";

function App() {
  return (
    <>
      <Routes>
        {AllRoutes.map((item, index) => {
          const { component, path } = item;
          return <Route key={index} element={component} path={path} />;
        })}
      </Routes>
    </>
  );
}

export default App;
