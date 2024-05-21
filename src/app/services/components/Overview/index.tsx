import Display from "@/components/Display";
import Image from "next/image";

const Overview : React.FC = () => {
    const leftContent = (
        <div className="w-full h-full bg-[#F7F7F7] p-7 md:p-20">
            <div className="flex justify-center md:justify-end">
                <Image src={'https://res.cloudinary.com/dhhqi0edv/image/upload/v1716129726/brainstorming-ideas_lf1qpe.jpg'}
                alt="brainstorming"
                width={550}
                height={500}
                loading="eager"/>
            </div>
        </div>
    )

    const rightContent = (
        <div className="flex flex-col justify-center bg-[#F7F7F7] gap-3 md:gap-5 font-DM-sans w-full h-full px-10 py-5 md:py-0 md:mt-0 md:pl-2">
            <h2 className="font-bold text-[20px] md:text-[26px] text-[#ff3e54]">\ What We Do \</h2>
            <p className="font-bold text-[35px] md:text-[42px] text-[#0E1F51] text-left">Solving Problems</p>
            <p className="text-[16px] md:text-[20px] text-[#000000] text-left">
                That phrase describes how we operate as we continuously strive to create fresh and innovative solutions to our clients problems.
            </p>
        </div>
    )

    return (
        <>
            <Display leftContent={leftContent} rightContent={rightContent} />
        </>
    );
}

export default Overview;