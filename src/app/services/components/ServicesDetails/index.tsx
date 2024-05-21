'use client'
import Display from "@/components/Display";
import { useState } from "react";
import Image from "next/image";
import ServicesDetailsData from "@/utils/ServicesDetails";

const ServicesDetails : React.FC = () => {
    const [serviceType, setServiceType] = useState<string>('Web Development');
    const data = ServicesDetailsData.find(service => (service.title === serviceType))
    const handleServiceType = (service:string) => {
        setServiceType(service);
    }

    const leftContent = (
        <div className="flex flex-col text-md md:text-xl justify-center font-bold items-center gap-3 md:gap-5 font-DM-sans w-full h-full py-5 md:py-10">
           <button onClick={() => handleServiceType("Web Development")} className={`p-3 md:p-5 w-1/2 text-[#0E1F51] rounded-md hover:text-white hover:bg-[#FF3E54] transition-all duration-300 ${serviceType === "Web Development" ? 'bg-[#FF3E54] text-white' : 'bg-slate-200'}`}>Web Development</button>
           <button onClick={() => handleServiceType("UI/UX Design")} className={`p-3 md:p-5 w-1/2 text-[#0E1F51] rounded-md hover:text-white hover:bg-[#FF3E54] transition-all duration-300 ${serviceType === "UI/UX Design" ? 'bg-[#FF3E54] text-white' : 'bg-slate-200'}`}>UI/UX Design</button>
           <button onClick={() => handleServiceType("Website Migration")} className={`p-3 md:p-5 w-1/2 text-[#0E1F51] rounded-md hover:text-white hover:bg-[#FF3E54] transition-all duration-300 ${serviceType === "Website Migration" ? 'bg-[#FF3E54] text-white' : 'bg-slate-200'}`}>Website Migration</button>
           <button onClick={() => handleServiceType("App Development")} className={`p-3 md:p-5 w-1/2 text-[#0E1F51] rounded-md hover:text-white hover:bg-[#FF3E54] transition-all duration-300 ${serviceType === "App Development" ? 'bg-[#FF3E54] text-white' : 'bg-slate-200'}`}>App Development</button>
           <button onClick={() => handleServiceType("Hubspot Integration")} className={`p-3 md:p-5 w-1/2 text-[#0E1F51] rounded-md hover:text-white hover:bg-[#FF3E54] transition-all duration-300 ${serviceType === "Hubspot Integration" ? 'bg-[#FF3E54] text-white' : 'bg-slate-200'}`}>Hubspot Integration</button>
           <button onClick={() => handleServiceType("Email Marketing")} className={`p-3 md:p-5 w-1/2 text-[#0E1F51] rounded-md hover:text-white hover:bg-[#FF3E54] transition-all duration-300 ${serviceType === "Email Marketing" ? 'bg-[#FF3E54] text-white' : 'bg-slate-200'}`}>Email Marketing</button>
        </div>
    )

    const rightContent = (
        <div className="w-full h-full gap-4 p-8 md:p-10 flex flex-col justify-center">
            <Image src={data!.photo} alt="photo" height={500} width={600} />
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl md:text-3xl font-bold text-[#FF3E54]'>{data!.title}</h1>
                <p className="text-black text-[14px] md:text-[16px] text-left">{data!.desc}</p>
            </div>
        </div>
    )


    return (
        <>
            <Display leftContent={leftContent} rightContent={rightContent} />
        </>
    );
}

export default ServicesDetails;