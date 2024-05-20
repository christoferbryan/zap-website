import Image from "next/image";

interface CardProps {
    icon : any;
    title : string;
    desc : string;
    width : number;
    number? : string;
}

const Card : React.FC<CardProps> = ({ icon, title, desc, width, number }) => {
    return (
        <> 
            <div className={`flex flex-col rounded-[10px] font-DM-sans gap-4 relative bg-[#F7F7F7] w-[400px] md:w-[${width}px] md:h-[330px] p-4`}>
                <div className="absolute right-2">
                    <h2 className="text-slate-300 text-[50px] font-bold">{number}</h2>
                </div>
                <Image src={icon} alt="research-logo" width={80} height={80}/>
                <h2 className="text-[20px] text-[#0E1F51] font-bold">{title}</h2>
                <p className="text-black text-[16px]">{desc}</p>
            </div>
        </>
    );
}

export default Card;