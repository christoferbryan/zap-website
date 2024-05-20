import Image from "next/image";
import Display from "@/components/Display";
import Link from "next/link";

const ServicesSection : React.FC = () => {
    const leftContent = (
        <div className="w-full h-full bg-[#F7F7F7] p-5 md:p-20">
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
        <div className="flex flex-col justify-center bg-[#F7F7F7] gap-5 font-DM-sans w-full h-full px-5 py-20 md:py-0 md:mt-0 md:pl-2">
            <h2 className="font-bold text-2xl text-[#ff3e54]">\ What We Do \</h2>
            <p className="font-bold text-[35px] text-[#0E1F51] text-left">
                We Develop Products That People Love to Use.    
            </p>
            <p className="text-[16px] text-[#000000] text-left">
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
            </p>
            <Link href='/services'>
                <button className="rounded-md w-fit px-6 py-2 bg-[#ff3e54] hover:bg-rose-700 transition-all duration-300">
                    <span className="font-semi-bold">View More</span>
                </button>
            </Link>
        </div>
    );

    return (
        <Display leftContent={leftContent} rightContent={rightContent} />
    );
}

export default ServicesSection;