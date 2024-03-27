import { Link } from "react-router-dom";

import links from "../data/footerLinks.json";

import BrandLink from "./BrandLink";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => (
    <footer className="bg-darkooo text-light flex flex-col md:flex-row justify-between p-8">
        <BrandLink scroll classes="text-yellow mb-4 md:mb-0 md:pl-4 inline-block order-1" />

        <div className="flex flex-col md:flex-row justify-between md:mx-auto space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
            {links.map((item) => (
                <div className="flex flex-col flex-wrap" key={item.title}>
                    <h6 className="font-krona text-sm">{item.title}</h6>
                    <div>
                        {item.links.map((link) => (
                            <Link
                                to={link.path}
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                key={link.name}
                                className="lowercase text-sm block hover:text-yellow">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="text-yellow space-x-4 md:space-x-0 order-2 md:order-3 flex md:block mb-6 md:mb-0">
            <a
                href="https://facebook.com/bolodeoku.taiwo.16/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-light-grey block mb-4">
                <Facebook />
            </a>
            <a
                href="http://x.com/-olubodun"
                target="_blank"
                rel="noreferrer"
                className="hover:text-light-grey block mb-4">
                <Twitter />
            </a>
            <a
                href="https://instagram.com/_olubodun"
                target="_blank"
                rel="noreferrer"
                className="hover:text-light-grey block mb-4">
                <Instagram />
            </a>
        </div>
    </footer>
);

export default Footer;
