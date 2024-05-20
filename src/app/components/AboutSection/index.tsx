import Display from "@/components/Display";
import Image from "next/image";
import Link from "next/link";

const AboutSection : React.FC = () => {
    
    const leftContent = (
        <div className="w-full h-full bg-[#F7F7F7] p-5 md:p-20" id="about">
            <div className="flex justify-center md:justify-end">
                <Image src={'https://res.cloudinary.com/dhhqi0edv/image/upload/v1716035937/diverse-friends_x9talc.png'}
                alt="diverse-friends"
                width={550}
                height={400}
                loading="eager"/>
            </div>
        </div>
    );

    const rightContent = (
        <div className="flex flex-col justify-center bg-[#F7F7F7] gap-5 font-DM-sans w-full h-full px-5 py-20 md:py-0 md:mt-0 md:pl-2">
            <h2 className="font-bold text-2xl text-[#ff3e54]">\ About Us \</h2>
            <p className="font-bold text-[42px] text-[#0E1F51] text-left">One of the Fastest Ways to Business Growth</p>
            <p className="text-[16px] text-[#000000] text-left">
                Zap was founded by Finn Rasmussen and his college friends in 2015. Together, they
                aim to provide IT services for companies and individuals at a reasonable cost.
            </p>
            <Link href="/about">
                <button className="rounded-md w-fit px-6 py-2 bg-[#ff3e54] hover:bg-rose-700 transition-all duration-300">
                    <span className="font-semi-bold">More About Us</span>
                </button>
            </Link>
        </div>
    );

    return (
        <Display leftContent={leftContent} rightContent={rightContent} />
    );
}

export default AboutSection;