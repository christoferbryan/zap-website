"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import { usePathname } from "next/navigation";

const Navbar : React.FC = () => {
    const { sidebarOpen, setSidebarState } = useStateContext();
    const pathname = usePathname();
    const handleButtonClick = () => {
        setSidebarState(!sidebarOpen);
    }

    return (
        <>
            <div className="navbar fixed top-0 w-full z-40 bg-white">
                <nav className="flex items-center justify-between">
                    <div className="relative bg-white flex px-5 py-2 w-1/3 md:w-1/5 md:justify-center">
                        <Link href='/'>
                            <Image src={logo} alt="company logo" className="w-14 cursor-pointer" />
                        </Link>
                    </div>
                    <ul className='gap-20 px-20 font-bold text-[#0E1F51] font-DM-Sans hidden md:flex'>
                        <li className={`link ${pathname === '/' ? 'text-[#ff3e54]' : 'hover:text-[#ff3e54]'}`}><Link href="/">Home</Link></li>
                        <li className={`link ${pathname === '/about' ? 'text-[#ff3e54]' : 'hover:text-[#ff3e54]'}`}><Link href="/about">About</Link></li>
                        <li className={`link ${pathname === '/services' ? 'text-[#ff3e54]' : 'hover:text-[#ff3e54]'}`}><Link href="/services">Our Services</Link></li>
                        <li className={`link ${pathname === '/team' ? 'text-[#ff3e54]' : 'hover:text-[#ff3e54]'}`}><Link href="/team">Team</Link></li>
                    </ul>
                    <div className="hamburger cursor-pointer h-fit px-[3px] py-2 mr-5 z-40 md:hidden" onClick={handleButtonClick}>
                        <div className='w-[30px] h-[2px] my-[6px] bg-black'></div>
                        <div className='w-[30px] h-[2px] my-[6px] bg-black'></div>
                        <div className='w-[30px] h-[2px] my-[6px] bg-black'></div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;