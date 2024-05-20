import Banner from "@/components/Banner";
import { Metadata } from "next";
import Overview from "./components/Overview";
import ServicesDetails from "./components/ServicesDetails";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
    title: "Services",
}

const Services : React.FC = () => {
    return (
        <div className="mt-[76px]">
            <Banner section="Services"/>
            <Overview />
            <ServicesDetails />
            <Testimonials />
        </div>
    )
}

export default Services;