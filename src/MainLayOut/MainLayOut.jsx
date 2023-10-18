import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="bg-gray-500">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
