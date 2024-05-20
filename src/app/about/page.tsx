import Banner from "@/components/Banner";
import { Metadata } from "next";
import Overview from "./components/Overview";
import Culture from "./components/Culture";
import TeamLeaders from "./components/Team";
import Meet from "./components/Meet";

export const metadata: Metadata = {
    title: "About",
}

const About : React.FC = () => {
    return (
        <div className="mt-[76px]">
            <Banner section="About"/>
            <Overview />
            <Culture />
            <TeamLeaders />
            <Meet />
        </div>
    )
}

export default About;