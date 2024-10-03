import React from "react";

const clientLogos = [
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
        alt: "",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
        alt: "",
    },
];

const CustomerLogos = () => {
    return (
        <>
            <section className=" my-10 ezy__clients4 light  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white" >
                <div className="container px-4 mx-auto">
                    <div className="text-center my-6">
                        <h2 className="font-bold text-[25px] lg:text-[35px] leading-none my-2  text-purple-700  leading-tight">
                            Trusted by nearly 5000+ customers & startups
                        </h2>
                    </div>
                    <marquee behavior="scroll" direction="left" loop>
                        <div className="flex justify-center items-center text-center">
                            {clientLogos.map((client, i) => (
                                <img
                                    src={client.logo}
                                    alt={client.alt}
                                    className="max-h-12 img-fluid px-12 my-6"
                                    key={i}
                                />
                            ))}
                        </div>
                    </marquee>
                    <hr className="m-10 mb-20" />
                </div>
            </section>
            

            <h1 className="text-4xl font-bold text-center  mx-auto text-gray-800 ">
            Plan for big expenses, manage profits,<br/> vendors, and much more
            </h1>
            <div className="text-s  text-center my-6 text-gray-400  mx-auto">
            We work with organizations of all sizes, from early start-ups to global brands, in <br/> the private, public, and social sector.
            </div>
            <button className="my-20 bg-blue-600 hover:bg-purple-700 text-white font-bold py-4 px-4 duration-300 rounded-md w-40">
                Get Started
            </button>


        </>
    );
};

export default CustomerLogos
