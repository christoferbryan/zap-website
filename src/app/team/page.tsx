import Banner from "@/components/Banner";
import { Metadata } from "next";
import TeamLeaders from "../about/components/Team";
import TeamMembers from "./components/TeamMembers";

export const metadata: Metadata = {
    title: "Team",
}

const Team : React.FC = () => {
    return (
        <div className="mt-[76px]">
            <Banner section="Team"/>
            <TeamLeaders />
            <TeamMembers />
        </div>
    )
}

export default Team;