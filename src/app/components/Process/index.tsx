import Card from "@/components/Card";
import research from '../../../../public/Research.svg';
import design from '../../../../public/Design.svg';
import develop from '../../../../public/Develop.svg';
import testLogo from '../../../../public/Test.svg';

const Process : React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-full gap-4 justify-center items-center py-10">
                <h2 className="font-bold text-[24px] text-[#ff3e54]">\ Planning \</h2>
                <p className="font-bold text-[40px] text-[#0E1F51]">Our Process</p>
                <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 md:flex-row">
                    <Card icon={research} title="Research" desc="We start everything with deep research on how our clients want their products to be." 
                    number="01" />
                    <Card icon={design} title="Design" desc="We design our products meticulously and with great care." 
                    number="02" />
                    <Card icon={develop} title="Develop" desc="We use the latest technology and framework to develop our products." 
                    number="03" />
                    <Card icon={testLogo} title="Test" desc="All of our products undergo tough testings before they are sent into the production phase to ensure customer satistfaction." 
                    number="04" />
                </div>
            </div>
        </>
    );
}

export default Process;