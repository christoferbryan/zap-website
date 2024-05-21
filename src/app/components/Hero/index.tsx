import Display from "@/components/Display";
import Image from "next/image";
import Link from "next/link";

const Hero : React.FC = () => {

    const leftContent = (
        <div className="flex flex-col justify-center gap-5 font-DM-sans w-full h-full px-5 py-20 md:py-0 md:mt-0 md:pl-24">
            <h2 className="font-bold text-xl md:text-2xl text-[#ff3e54]">\ We Are Here \</h2>
            <p className="font-bold text-3xl md:text-5xl text-[#0E1F51] text-left">Better Insights For Business Growth</p>
            <Link href='/#about'>
                <button className="rounded-md w-fit px-3 md:px-6 py-2 bg-[#ff3e54] hover:bg-rose-700 transition-all duration-300">
                    <span className="font-semi-bold text-[15px] md:text-[20px]">View More</span>
                </button>
            </Link>
        </div>
    );

    const rightContent = (
        <div className="w-full h-full px-5 md:pl-10">
            <Image src={'https://res.cloudinary.com/dhhqi0edv/image/upload/v1716028730/business-girl_sfdny1.png'} 
            alt="business-girl"
            width={500}
            height={360}
            loading="eager" />
        </div>
    );

    return (
        <Display leftContent={leftContent} rightContent={rightContent}/>
    );
}

export default Hero;