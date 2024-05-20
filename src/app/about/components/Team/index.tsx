import TeamLeaderData from "@/utils/TeamLeader";
import TeamCard from "./TeamCard";

const TeamLeaders : React.FC = () => {
    return (
        <>
            <div className="flex flex-col py-10 w-full justify-center items-center gap-4 bg-[#F7F7F7]">
                <h2 className="font-bold text-[24px] text-[#ff3e54]">\ Team \</h2>
                <p className="font-bold text-[40px] text-[#0E1F51]">Our Leaders</p>
                <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
                    {TeamLeaderData.map((data, index) => (
                                            <div key={index} className="flex items-center justify-center w-full h-full">
                                                <TeamCard {...data}/>
                                            </div>
                                    ))}
                </div>
            </div>
        </>
    );
}

export default TeamLeaders;