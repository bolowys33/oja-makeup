
import bannerImg from "../assets/skincare.png";
import SectionLink from "./SectionLink";

const SecondBanner = () => {
    return (
        <div className="bg-pink-300 flex justify-between md:px-20 w-full items-center container mx-auto relative bottom-[-120px]">
            <div className="">
                <h4 className="font-krona mb-4 font-bold text-sm md:text-2xl">
                    Be natural, <br />be wise, <br />be you.
                </h4>
                <SectionLink path="/about" name="see more"/>
            </div>
            <img
                className="py-8 w-[120px] md:w-[200px]"
                // width={200}
                src={bannerImg}
                alt="Tooth brush and paste laying on top of a green leaf"
            />
        </div>
    );
};

export default SecondBanner;
