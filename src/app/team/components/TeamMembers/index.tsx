'use client';
import TeamCard from "@/app/about/components/Team/TeamCard";
import useTeamMember from "@/hooks/useTeamMember";
import { TeamMember } from "@/hooks/useTeamMember";

const TeamMembers : React.FC = () => {
    const MembersData : TeamMember[] = useTeamMember();

    return (
        <>
            <div className="flex flex-col py-10 w-full justify-center items-center gap-4 bg-[#FFFFFF]">
                <p className="font-bold text-[40px] text-[#0E1F51]">Our Team Members</p>
                <div className="flex flex-col gap-8 md:flex-row justify-center items-center text-black">
                {MembersData.slice(0,4).map((person, index) => (
                                            <div key={index} className="flex items-center justify-center w-full h-full">
                                                <TeamCard {...person} borderRadius={10}/>
                                            </div>
                                    ))}
                </div>
                <div className="flex flex-col gap-8 md:flex-row justify-center items-center text-black">
                {MembersData.slice(4,8).map((person, index) => (
                                            <div key={index} className="flex items-center justify-center w-full h-full">
                                                <TeamCard {...person} borderRadius={10} />
                                            </div>
                                    ))}
                </div>
            </div>
        </>
    );
}

export default TeamMembers;