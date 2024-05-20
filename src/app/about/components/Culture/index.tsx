import Card from "@/components/Card";
import CoreValuesData from "@/utils/Culture";

const Culture : React.FC = () => {
    return (
        <>
            <div className="flex flex-col py-10 w-full justify-center items-center gap-4 bg-[#ffffff]">
                <h2 className="font-bold text-[24px] text-[#ff3e54]">\ Culture \</h2>
                <p className="font-bold text-[40px] text-[#0E1F51]">Our Core Values</p>
                <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 md:flex-row">
                    {CoreValuesData.map((data, index) => (
                                                <div key={index} className="flex items-center justify-center">
                                                    <Card {...data}/>
                                                </div>
                                        ))}
                </div>
            </div>
        </>
    );
}

export default Culture;