import Link from "next/link";

const Meet : React.FC = () => {
    return (
        <>
            <div className="flex flex-row pb-10 w-full justify-center items-center bg-[#F7F7F7]">
                <Link href="/team">
                    <button className="rounded-md w-fit px-3 md:px-6 py-2 bg-[#ff3e54] hover:bg-rose-700 transition-all duration-300">
                        <span className="font-semi-bold">Meet Our Team</span>
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Meet;