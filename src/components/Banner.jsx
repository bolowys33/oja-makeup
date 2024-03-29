
import bannerImg from "../assets/leaf.png";
import SectionLink from "./SectionLink";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center mt-16 md:mt-20 container mx-auto mb-8">
            <div>
                <h1 className="font-krona text-3xl mb-4">
                    The React project with API implemented using Axios, Tailwind
                    CSS, React Router and React Hooks
                </h1>
                <p className="text-sm mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam fugit mollitia harum quo eligendi sequi commodi aut
                    cupiditate corporis, vitae magni omnis assumenda deserunt
                    recusandae.
                </p>
                <SectionLink path="/about" name="see more" isMain />
            </div>
            <img
                className="ml-0 md:ml-4 mb-4 md:mb-0"
                src={bannerImg}
                alt="Tooth brush and paste laying on top of a green leaf"
            />
        </div>
    );
};

export default Banner;
