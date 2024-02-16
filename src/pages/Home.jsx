import Banner from "../components/Banner";
import Benefit from "../components/Benefit";
import MissionBanner from "../components/MissionBanner";
import TopProducts from "../components/TopProducts";

const Home = () => {
    return (
        <>
            <div className="home ">
                <Banner />
                <TopProducts />
                <MissionBanner />
                <Benefit />
            </div>
        </>
    );
};

export default Home;
