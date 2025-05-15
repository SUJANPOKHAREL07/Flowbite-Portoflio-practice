
// import {  NavLink  } from "react-router-dom"


// const Nav=()=>{
//     return(
//         <>
//         <nav className="flex flex-wrap justify-between text-white bg-gray-800 px-10 pt-6 ">
//             <a href="/" className="text-xl font-bold pt-3 ">Sujan Pokharel</a>
//           <div className="flex flex-wrap gap-x-8 font-semibold ">
//               <NavLink to="/" className={({isActive})=>isActive? "text-red-300":"text-white"}>
//            Home
//          </NavLink>
//          <NavLink to="/about" className={({isActive})=>isActive? "text-red-300":"text-white"}>
//            About
//          </NavLink>

//           <NavLink to="/projects" className={({isActive})=>isActive? "text-red-300":"text-white"}>
//            Projects
//          </NavLink>
//           <NavLink to="/contact" className={({isActive})=>isActive? "text-red-300":"text-white"}>
//            Contact
//          </NavLink>
//           </div>
//         </nav>
        
//         </>
//     )
// }
// export default Nav

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <Navbar className="dark:bg-gray-700 pt-3">
      <NavbarBrand>
      
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white p-1 ml-9">Sujan Pokharel</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="text-white bg-green-300 dark:bg-green-500 hover:dark:bg-green-300 hover:text-white font-bold">Hire Now!</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
      <NavLink to="/" className={({isActive})=>isActive? "text-green-300":"text-white"}>
            Home
          </NavLink>
        <NavLink to="/about" className={({isActive})=>isActive? "text-green-300":"text-white"}>
            About
          </NavLink>
           <NavLink to="/projects" className={({isActive})=>isActive? "text-green-300":"text-white"}>
            Projects
          </NavLink>
           <NavLink to="/contact" className={({isActive})=>isActive? "text-green-300":"text-white"}>
            Contact
          </NavLink>

       
      </NavbarCollapse>
    </Navbar>
  );
}
