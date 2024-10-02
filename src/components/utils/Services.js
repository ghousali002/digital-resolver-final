
import { Globe, Zap, Brain, Cog, Smartphone, Code } from 'lucide-react'

const services = [
    {
        title: 'Web Development',
        description: 'Deliver high-quality web development, design and functionality tailored for your business.',
        icon: Globe,
    },
    {
        title: 'Digital Transformation',
        description: 'Digitize, automate and accelerate your business operations through digital transformation.',
        icon: Zap,
    },
    {
        title: 'Generative AI',
        description: 'Harness Generative AI and new technologies to innovate, automate, and stay ahead of the competition.',
        icon: Brain,
    },
    {
        title: 'DevOps',
        description: 'Speed up your development process and improve product quality with DevOps consulting and automation services that streamline deployment.',
        icon: Cog,
    },
    {
        title: 'Mobile App Development',
        description: "Make your mobile app stand out from the crowd with Devsinc's Android and iOS development.",
        icon: Smartphone,
    },
    {
        title: 'Custom Development',
        description: 'Get custom software perfectly built for your business to boost productivity and efficiency.',
        icon: Code,
    },
]

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
export default function Service() {
    return (
        <>
         <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 mt-6">
                From Idea to Completion, we bring Full-Stack Expertise
            </h1>
        <div 
        // className="container mx-auto px-4 py-16 mt-20" 
        className="flex flex-col lg:flex-row max-w-6xl mx-auto p-4 gap-8"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
            {/* <marquee behavior="scroll" direction="left" loop>
                <div className="flex justify-center items-center text-center">
                    {clientLogos.map((client, i) => (
                        <img
                            src={client.logo}
                            alt={client.alt}
                            className="max-h-12 img-fluid  my-6"
                            key={i}
                        />
                    ))}
                </div>
            </marquee> */}
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="p-6 bg-white rounded-lg shadow-md relative overflow-hidden group transition-colors duration-300 ease-in-out hover:bg-gray-100"
                    >
                        <div className="relative z-10">
                            <service.icon className={`w-12 h-12 mb-4`} />
                            <h2 className={`text-xl font-semibold mb-2 `}>{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}