import Image from "next/image";

interface CareerProps{
    image : any;
    role : string;
    experience : string;
}

const Career : React.FC<CareerProps> = ( {image, role, experience} ) => {
    return (
        <>
            <div className="flex gap-4">
                <button className="bg-white rounded-xl py-3 px-3 hover:bg-blue-400 transition-all duration-300"><Image src={image} alt="image" className="size-8" /></button>
                <div className="flex flex-col gap-2 font-DM-sans">
                    <span className="text-[#ff3e54] font-bold font-DM-sans">{role}</span>
                    <span className="font-semi-bold font-DM-sans text-white">{experience}</span>
                </div>
            </div>
        </>
    )
   
}

export default Career;