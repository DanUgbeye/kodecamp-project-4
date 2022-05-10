import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' z-50 sticky mb-8 top-0 left-0 w-full bg-[#DBC1ED] py-4 flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between px-8 '>

        <Link to={'/'} className=" md:pl-20 text-3xl font-semibold text-[#614772] ">PurpleX</Link>

        <nav className=" text-[#614772] font-semibold flex gap-8 sm:gap-4 ">
            <NavLink to={'/'} className={ ({ isActive }) => ((isActive ? ' hover:bg-transparent border-b-2 border-[#76568A] border-solid ' : ' hover:border-b-2 hover:border-[#76568A] hover:border-solid ') + ' px-2 py-1   ')} >
                Home
            </NavLink>

            <NavLink to={'/about'} className={ ({ isActive }) => ((isActive ? ' hover:bg-transparent border-b-2 border-[#76568A] border-solid ' : ' hover:border-b-2 hover:border-[#76568A] hover:border-solid ') + ' px-2 py-1   ')} >
                About
            </NavLink>

            <NavLink to={'/contact'} className={ ({ isActive }) => ((isActive ? ' hover:bg-transparent border-b-2 border-[#76568A] border-solid ' : ' hover:border-b-2 hover:border-[#76568A] hover:border-solid ') + ' px-2 py-1   ')} >
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Header;