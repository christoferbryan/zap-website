import Image from "next/image";
import Display from "@/components/Display";
import Link from "next/link";

const ServicesSection : React.FC = () => {
    const leftContent = (
        <div className="w-full h-full bg-[#F7F7F7] p-7 md:p-20">
            <div className="flex justify-center md:justify-end">
                <Image src={'https://res.cloudinary.com/dhhqi0edv/image/upload/v1716041961/creative-people_gcnqpf.png'}
                alt="cretive-people"
                width={550}
                height={500}
                loading="eager"/>
            </div>
        </div>
    );

    const rightContent = (
        <div className="flex flex-col justify-center bg-[#F7F7F7] gap-3 md:gap-5 font-DM-sans w-full h-full px-10 py-5 md:py-0 md:mt-0 md:pl-2">
            <h2 className="font-bold text-[20px] md:text-[24px] text-[#ff3e54]">\ What We Do \</h2>
            <p className="font-bold text-[30px] md:text-[42px] text-[#0E1F51] text-left">
                We Develop Products That People Love to Use.    
            </p>
            <p className="text-[16px] md:text-[20px] text-[#000000] text-left">
                We develop products with our clients in mind so that they can have a peace of mind.
            </p>
            <Link href='/services'>
                <button className="rounded-md w-fit px-3 md:px-6 py-2 bg-[#ff3e54] hover:bg-rose-700 transition-all duration-300">
                    <span className="font-semi-bold text-[15px] md:text-[20px]">View More</span>
                </button>
            </Link>
        </div>
    );

    return (
        <Display leftContent={leftContent} rightContent={rightContent} />
    );
}

export default ServicesSection;