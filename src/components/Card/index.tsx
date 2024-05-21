import Image from "next/image";

interface CardProps {
    icon : any;
    title : string;
    desc : string;
    number? : string;
}

const Card : React.FC<CardProps> = ({ icon, title, desc, number }) => {
    return (
        <> 
            <div className={`flex flex-col rounded-[10px] font-DM-sans gap-4 relative bg-[#F7F7F7] w-[250px] h-[300px] md:w-[300px] md:h-[330px] p-3 md:p-5`}>
                <div className="absolute right-2">
                    <h2 className="text-slate-300 text-[40px] md:text-[50px] font-bold">{number}</h2>
                </div>
                <Image src={icon} alt="research-logo" width={80} height={80} className="size-14 md:size-20"/>
                <h2 className="text-[20px] text-[#0E1F51] font-bold">{title}</h2>
                <p className="text-black text-[16px]">{desc}</p>
            </div>
        </>
    );
}

export default Card;