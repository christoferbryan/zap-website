import Image from "next/image";
import quotation from '../../../../../public/quotation.svg';

interface CardProps {
    photo : any;
    name : string;
    desc : string;
    position : string;
}

const CardTestimonial : React.FC<CardProps> = ({ photo, name, desc, position }) => {
    return (
        <> 
            <div className="flex flex-col font-DM-sans gap-4 relative bg-slate-200 p-5 rounded-[10px] w-[750px] h-[335px]">
                <div className="absolute right-6">
                    <Image src={quotation} alt="quotation-logo" className="size-10" />
                </div>
                <Image src={photo} alt="profile-photo" width={80} height={80}/>
                <p className="text-black text-[16px]">{desc}</p>
                <div className="flex flex-col">
                    <span className="text-[#ff3e54] font-bold">{name}</span>
                    <span className="text-[#0E1F51] font-bold">{position}</span>
                </div>
            </div>
        </>
    );
}

export default CardTestimonial;