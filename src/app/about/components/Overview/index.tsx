'use client'
import Display from "@/components/Display";
import Image from "next/image";
import AboutData from "@/utils/AboutData";
import { useState } from "react";

const Overview : React.FC = () => {
    const [valuesType, setValuesType] = useState<string>("Vision");
    const data = AboutData.filter(data => (data.title === valuesType));

    const handleValuesType = (values:string) => {
        setValuesType(values);
    }

    const leftContent = (
        <div className="w-full h-full bg-[#F7F7F7] p-5 md:p-20">
            <div className="flex justify-center md:justify-end">
                <Image src={'https://res.cloudinary.com/dhhqi0edv/image/upload/v1716129866/diverse-team_f7suju.webp'}
                alt="diverse-team"
                width={550}
                height={400}
                loading="eager"/>
            </div>
        </div>
    );

    const rightContent = (
        <div className="flex flex-col justify-center bg-[#F7F7F7] gap-4 font-DM-sans w-full h-full px-5 py-20 md:py-0 md:mt-0 md:pl-2">
            <h2 className="font-bold text-2xl text-[#ff3e54]">\ About Us \</h2>
            <p className="font-bold text-[35px] text-[#0E1F51] text-left">We Believe in Team Diversity</p>
            <p className="text-[16px] text-[#000000] text-left">
                It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout. The point of 
                using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed.
            </p>
            <div className="flex gap-8 relative">
                <div onClick={() => handleValuesType('Vision')} className={`font-bold text-lg text-[#0E1F51] z-10 border-b-4 cursor-pointer transition-all duration-300 ${valuesType === "Vision" ? "border-[#ff3e54]" : "hover:border-[#ff3e54]"} `}>
                    <h2>Vision</h2>
                </div>
                <div onClick={() => handleValuesType('Mission')} className={`font-bold text-lg text-[#0E1F51] z-10 border-b-4 cursor-pointer transition-all duration-300 ${valuesType === "Mission" ? "border-[#ff3e54]" : "hover:border-[#ff3e54]"} `}>
                    <h2>Mission</h2>
                </div>
            </div>
            <div className="h-[10vh] text-black">
                    <p>{data[0].content}</p>
            </div>
        </div>
    )

    return (
        <Display leftContent={leftContent} rightContent={rightContent} />
    );
}

export default Overview;