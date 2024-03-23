import bannerImg from "../assets/skincare.png";

const SecondBanner = () => {
    return (
        <div className="mx-6 mb-4">
            <div className="bg-green flex justify-between px-2 md:px-20 w-full items-center">
                <div className="">
                    <h4 className="text-white font-krona mb-4 font-bold text-sm">
                        Be natural, <br />
                        be wise, <br />
                        be you.
                    </h4>
                </div>
                <img
                    className="py-4"
                    width={100}
                    src={bannerImg}
                    alt="Tooth brush and paste laying on top of a green leaf"
                />
            </div>
        </div>
    );
};

export default SecondBanner;
