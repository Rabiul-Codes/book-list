
import Books from "./Components/Books/Books";
import Navbar from "./Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
         <Navbar></Navbar>
          <div className="flex flex-col items-center gap-4">
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Root;