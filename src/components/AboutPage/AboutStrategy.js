import React from 'react'

import { useMediaQuery } from 'react-responsive';

const sidebarItems = [
    {
        icon: "📊",
        title: "Strategy & Business",
        description: "We design business models and growth strategies to be effective and competitive.",
    },
    {
        icon: "📦",
        title: "Product Development",
        description: "We design business models and growth strategies to be effective and competitive.",
    },
    {
        icon: "🔬",
        title: "Futures Research",
        description: "We design business models and growth strategies to be effective and competitive.",
    },
]

const AboutStrategy = () => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    return (
        <div className='flex bg-gray-100 min-h-screen' style={{
            backgroundImage: 'linear-gradient(0deg, #E9E9F9 0.76%, #E1E2FF00 100%)',


        }}>

            <div className='mx-auto container p-6 '>
                <div className="my-12">

                    <div className="text-s  text-center mb-2 text-gray-500  mx-auto">
                        IT’S TIME fOR A BLOCKCHAIN REVOLUTION
                    </div>
                    <h1 className="text-5xl font-bold text-center mb-6  mx-auto text-gray-800 ">
                        Developing sustainable and <br /> innovative blockchain <br /> solutions
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row  container">
                    <div className="flex flex-col lg:flex-row  ">

                        <div className={`w-full lg:w-1/2 px-6 ${isDesktop && 'py-8'} space-y-7 `}>
                            {sidebarItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-6  ${isDesktop && 'mx-12'} rounded-[15px] cursor-pointer transition-all  bg-white hover:bg-gray-100
                                        }`}
                                    style={{
                                        // boxShadow: `0 5px 20px rgba(18,2,47,.15)`

                                    }}

                                >
                                    <div className="flex  space-x-4" style={{ textAlign: 'left' }}>
                                        <div className="text-3xl">{item.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3 text-purple-800">{item.title}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex-1 p-6 flex justify-center">
                            <div className="w-full my-auto  rounded-lg p-4 "
                                style={{
                                    textAlign: 'left',
                                    lineHeight: '26px',
                                    // justifyContent: 'center',


                                }}>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                                    <span className="text-purple-900">Strategies that get you  </span>
                                    <br />
                                    <span className="text-blue-400">on the path to success</span>
                                </h1>
                                <p className="text-gray-600 mb-8">
                                    What if blockchain adoption didn’t mean crypto adoption? A stablecoin as our gas token removes transaction volatility and speculation. We are creating the next class of blockchain, built on the principle of economic sustainability.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className=" bg-blue-600 hover:bg-purple-700 text-white font-bold py-4 px-4 duration-300 rounded-md w-40">
                                        Our Services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStrategy
