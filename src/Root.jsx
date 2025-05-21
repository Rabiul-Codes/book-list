
import Books from "./Components/Books/Books";
import Navbar from "./Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
         
           <Navbar></Navbar>
        
          <Outlet></Outlet>
       
          <Books></Books>
        
        </div>
    );
};

export default Root;