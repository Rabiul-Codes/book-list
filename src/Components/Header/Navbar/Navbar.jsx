
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <li><NavLink to='/' className={({isActive})=>{
        return isActive?'hoverStyle':'font-extrabold'
     }}>Home</NavLink></li>
     <li><NavLink to='/listedBooks' className={({isActive})=>{
        return isActive?'hoverStyle':'font-extrabold'
     }}>Listed Books</NavLink></li>
     <li><NavLink to='/PagesToRead' className={({isActive})=>{
        return isActive?'hoverStyle':'font-extrabold'
     }}>Pages to Read</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-extrabold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/' className={({isActive})=>{
        return isActive?'hoverStyle':'font-extrabold'
     }}>Home</NavLink></li>
     <li><NavLink to='/listedBooks' className={({isActive})=>{
        return isActive?'hoverStyle':'font-extrabold'
     }}>Listed Books</NavLink></li>
     <li><NavLink to='/PagesToRead' className={({isActive})=>{
        return isActive?'hoverStyle':'font-extrabold'
     }}>Pages to Read</NavLink></li>
     </ul>
  </div>
  <div className="navbar-end flex">
    <a className="btn bg-[#23BE0A]">sing in</a>
    <a className="btn bg-[#59C6D2]">sing up</a>
  </div>
</div>
    );
};

export default Navbar;