import ServicesData from "@/utils/Services";
import Card from "@/components/Card";

const Expertise : React.FC = () => {
    return (
        <>
            <div className="flex flex-col py-10 w-full justify-center items-center gap-4 bg-[#ffffff]">
                <h2 className="font-bold text-[24px] text-[#ff3e54]">\ Services \</h2>
                <p className="font-bold text-[40px] text-[#0E1F51]">Our Expertise</p>
                <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 md:flex-row">
                    {ServicesData[0].map((data, index) => (
                                                <div key={index} className="flex items-center justify-center">
                                                    <Card {...data} width={360}/>
                                                </div>
                                        ))}
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 md:flex-row">
                    {ServicesData[1].map((data, index) => (
                                                <div key={index} className="flex items-center justify-center">
                                                    <Card {...data} width={360}/>
                                                </div>
                                        ))}
                </div>
            </div>
        </>
    );
}

export default Expertise;