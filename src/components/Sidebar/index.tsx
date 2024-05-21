"use client";
import Image from "next/image";
import close from '../../../public/x.svg';
import { useStateContext } from "@/context/StateContext";
import { useEffect } from "react";
import Link from "next/link";

const Sidebar : React.FC = () => {
    const { sidebarOpen, setSidebarState } = useStateContext();

    const handleOpenSidebar = () => {
        setSidebarState(!sidebarOpen);
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768 && sidebarOpen) {
            setSidebarState(false);
          }
        };

        let timeoutId : NodeJS.Timeout;
    
        const timeResize = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(handleResize, 100);
        };
    
        handleResize();
        window.addEventListener('resize', timeResize);
    
        return () => {
          window.removeEventListener('resize', timeResize);
          clearTimeout(timeoutId);
        };
      }, [sidebarOpen, setSidebarState]);

    const buttonDesign = "bg-white w-2/3 text-[#0E1F51] rounded-md m-auto p-3 text-center border-2 border-rose-900 cursor-pointer hover:bg-[#ff3e54] hover:text-white transition-all duration-300";

    return (
        <>
            <div className={`h-full w-full bg-rose-200 flex flex-col z-50 fixed transition-all duration-300 ${sidebarOpen ? 'right-0 ' : 'right-[-100%]'}`}>
                {/* <Image src={close} alt="x-logo" className="w-10 absolute right-8 top-8 cursor-pointer" onClick={handleOpenSidebar}/>  */}
                
                <nav className="flex flex-col gap-14">
                    <div className="p-3 h-32"></div>
                    <ul className="flex flex-col font-DM-sans text-2xl gap-7 justify-center text-center font-semibold">
                        <li><Link href='/' onClick={handleOpenSidebar}><button className = {buttonDesign}>Home</button></Link></li>
                        <li><Link href='/about' onClick={handleOpenSidebar}><button className = {buttonDesign}>About</button></Link></li>
                        <li><Link href='/services' onClick={handleOpenSidebar}><button className = {buttonDesign}>Our Services</button></Link></li>
                        <li><Link href='/team' onClick={handleOpenSidebar}><button className = {buttonDesign}>Team</button></Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;