import React from 'react'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


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

const images = [
    "https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/dashboard-final.png",
    "https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/dashboard-final.png",
    "https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/dashboard-final.png",

]
const HomeApproach = () => {
    const [selectedItem, setSelectedItem] = useState(0)
    return (

        <div className='flex bg-gray-100 min-h-screen' style={{
            backgroundImage: 'linear-gradient(0deg, #E9E9F9 0.76%, #E1E2FF00 100%)',
           

        }}>

            <div className='mx-auto container p-6 '>
                <div className="text-s  text-center mb-2 text-gray-500  mx-auto">
                    HELPING ENTERPRENEURS MAKE MORE MORE

                </div>
                <h1 className="text-5xl font-bold text-center mb-6 w-[53vw] mx-auto text-gray-800 ">
                    Unlimited cash back, zero fees, no credit check
                </h1>
                <div className="flex flex-col md:flex-row  container">
                    <div className="flex flex-col lg:flex-row  ">

                        <div className="w-full lg:w-1/3 px-6 py-8 space-y-14 ">
                            {sidebarItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-[15px] cursor-pointer transition-all  ${selectedItem === index ? "bg-white" : "transparent hover:bg-gray-100"
                                        }`}
                                    style={{
                                        boxShadow: selectedItem === index && `0 5px 20px rgba(18,2,47,.15)`

                                    }}
                                    onClick={() => setSelectedItem(index)}
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
                            <div className="w-full max-w-2xl aspect-video bg-white rounded-lg shadow-lg p-4 border-4 border-blue-900">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedItem}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={images[selectedItem]}
                                            alt={`Image for ${sidebarItems[selectedItem].title}`}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeApproach
