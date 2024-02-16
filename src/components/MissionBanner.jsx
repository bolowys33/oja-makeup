import bannerImg from "../assets/cream.png";

const MissionBanner = () => {
    return (
        <div className="bg-light-grey mb-10">
            <div className="flex pt-56 pb-12 items-center container mx-auto">
                <img className="mr-4 py-4" src={bannerImg} alt="Cream and weed" />
                <div>
                    <h2 className="font-krona text-3xl mb-4">Clean code that you deserve</h2>
                    <p className="text-sm mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, harum. Nesciunt deleniti sapiente sit asperiores non facere fuga itaque a fugiat qui, corporis perferendis consequuntur at incidunt rem! Reprehenderit, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam numquam voluptate neque deleniti quibusdam nobis ab deserunt iusto, recusandae laboriosam unde ex vero ipsa rerum magnam fugit facere debitis!
                    </p>
                    <p className="text-sm mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, harum. Nesciunt deleniti sapiente sit asperiores non facere fuga itaque a fugiat qui, corporis perferendis consequuntur at incidunt rem! Reprehenderit, sit. LO
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionBanner;
