const Facts = ({ icon, title, number, description }) => {
    return (
        <div className=" flex flex-col md:flex-row items-center w-1/3 mx-auto">
            {icon}
            <div className="text-center">
                <h2 className="font-krona text-3xl">{number}</h2>
                <h4 className="font-krona">{title}</h4>
                <p className="text-sm w-5/6 mx-auto">{description}</p>
            </div>
        </div>
    ); 
};

export default Facts;
