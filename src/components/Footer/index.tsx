import Image from "next/image";
import logo from '../../../public/logo.png';
import Link from "next/link";
import linkedin from '../../../public/linkedin.svg';
import instagram from '../../../public/instagram.svg';
import facebook from '../../../public/facebook.svg';
import twitter from '../../../public/twitter.svg';
import reactLogo from '../../../public/react.svg';
import wordpress from '../../../public/wordpress.svg';
import wix from '../../../public/wix.svg';
import Career from "./Careers";

const Footer : React.FC = () => {
    return (
        <div className="pt-16 z-10 font-DM-sans bg-[#0e1f51]">
            <div className="grid items-center gap-2 px-2 md:grid-cols-4 md:px-20 md:gap-8">
                <div className="flex flex-col gap-4 pt-6 pb-14 px-6 py-6">
                    <Image src={logo} alt="company-logo" className="w-14"/>
                    <p className="text-lg font-semibold">It is a long established 
                    fact that a reader will be distracted by the readable content of a page when looking at.</p>
                    <Link href="/about" className="rounded-full py-2 px-2 bg-white w-fit hover:bg-[#ff3e54] hover:text-white text-black md:px-10 transition-all duration-300">
                        <span className="text-md font-semibold md:text-lg">About Us</span>
                    </Link>
                    <div className="flex gap-4">
                        <button className="bg-white rounded-xl py-3 px-3 hover:bg-blue-400 transition-all duration-300"><Image src={linkedin} alt="linkedin-logo" className="size-4" /></button>
                        <button className="bg-white rounded-xl py-3 px-3 hover:bg-blue-400 transition-all duration-300"><Image src={instagram} alt="instagram-logo" className="size-4" /></button>
                        <button className="bg-white rounded-xl py-3 px-3 hover:bg-blue-400 transition-all duration-300"><Image src={facebook} alt="facebook-logo" className="size-4" /></button>
                        <button className="bg-white rounded-xl py-3 px-3 hover:bg-blue-400 transition-all duration-300"><Image src={twitter} alt="twitter-logo" className="size-4" /></button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 pt-6 pb-14 px-6 py-6">
                    <div className="relative pb-2">
                        <h2 className="text-2xl font-bold">Services</h2>
                        <span className="absolute left-0 right-0 bottom-0 h-1 w-12 bg-red-500"></span>
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-4 font-DM-sans font-semi-bold">
                            <li>Web Design/Development</li>
                            <li>App Development</li>
                            <li>UI/UX Design</li>
                            <li>HubSpot Integration</li>
                            <li>Email Marketing</li>
                            <li>Website Migration</li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-5 pt-6 pb-14 px-6 py-6">
                    <div className="relative pb-2">
                        <h2 className="text-2xl font-bold">Career</h2>
                        <span className="absolute left-0 right-0 bottom-0 h-1 w-12 bg-red-500"></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Career image={reactLogo} role="ReactJs Dev." experience="1-5 Years of Exp."/>
                        <Career image={wordpress} role="Wordpress Dev." experience="1-5 Years of Exp."/>
                        <Career image={wix} role="Wix Developer" experience="1-5 Years of Exp."/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 pt-6 pb-14 px-6 py-6">
                    <div className="relative pb-2">
                        <h2 className="text-2xl font-bold">Subscribe Us</h2>
                        <span className="absolute left-0 right-0 bottom-0 h-1 w-12 bg-red-500"></span>
                    </div>
                    <p className="text-lg font-semibold">It is a long established 
                    fact that a reader will be distracted by the readable.</p>
                    <div className="flex flex-col text-md gap-4">
                        <input id="email" type="text" autoComplete="off" className="'border-2 border-black py-2 pl-4 w-44 text-black md:w-64" placeholder="Email" />
                        <div className="flex flex-row w-64 md:flex-row-reverse">
                            <button className="rounded-md w-fit px-2 py-2 bg-[#ff3e54] hover:bg-rose-700 transition-all duration-300">
                                <span className="text-md font-semibold">Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;