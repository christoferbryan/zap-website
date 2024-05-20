interface BannerProps {
    section : string;
}

const Banner : React.FC<BannerProps> = ({ section }) => {
    
    return (
        <>
            <div className="bg-[#0E1F51] flex justify-center items-center h-[280px] w-full">
                <h2 className="font-bold text-4xl text-[#ff3e54]">{section}</h2>
            </div>
        </>
    );
}

export default Banner;