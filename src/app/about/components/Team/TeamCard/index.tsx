import Image from "next/image";
import React from "react";

interface TeamCardProps {
    photo : any;
    name : string;
    position : string;
    borderRadius? : number;
}

const TeamCard : React.FC<TeamCardProps> = ({ photo, name, position, borderRadius }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <Image src={photo} alt="leader-photo" width={260} height={300} className={`rounded-[${borderRadius}px]`}/>
                <h2 className="text-[20px] text-[#FF3E54] font-bold">{name}</h2>
                <p className="text-[#0E1F51] text-[16px]">{position}</p>
            </div>
        </>
    );
}

export default TeamCard;