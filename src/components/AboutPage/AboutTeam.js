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
export default function AboutTeam() {
    return (
        <div className="container mx-auto px-8 py-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
                Meet our awesome and professional team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-8 p-8 gap-8">
                {[
                    {
                        name: "Marta Smith",
                        role: "Product Designer",
                        image: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/img-staff-1.png"
                    },
                    {
                        name: "Thomas Smith",
                        role: "Developer",
                        image: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/img-staff-2.png"
                    },
                    {
                        name: "Stella Smith",
                        role: "Project Manager",
                        image: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/img-staff-3.png"
                    },
                    {
                        name: "Martin Smith",
                        role: "Artificial Intelligence",
                        image: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/img-staff-4.png"
                    }
                ].map((member, index) => (
                    <div key={index} className="bg-white p-6  rounded-[30px] duration-300 hover:shadow-lg border-2 overflow-hidden">
                        <img
                            src={member.image}
                            alt={member.name}

                            className=" rounded-[30px]"
                        />
                        <div className="p-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                            <p className="text-gray-600 mt-2">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container  mx-auto">

                <marquee  behavior="scroll" direction="left" loop>
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
            </div>
        </div>
    )
}