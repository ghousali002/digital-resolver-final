// import React from 'react'

// const HomeNextBusiness = () => {
//     return (
//         <div>
//             <div className='mx-auto container p-6 '>
//                 <h1 className="text-5xl font-bold text-center mb-6 w-[53vw] mx-auto text-gray-800 ">
//                     Develop your next business today
//                 </h1>
//                 <div className="text-s  text-center mb-2 text-gray-500  mx-auto">
//                     We design new concepts, prototypes and processes for the next generation of services and experiences, ready for the market.
//                 </div>
//                 <div className="flex flex-col md:flex-row  container">
//                     <div className="flex flex-col lg:flex-row  ">

//                         <div className="w-full lg:w-1/2 px-6 py-8 space-y-14 ">

//                         </div>

//                         <div className="flex-1 p-6 flex justify-center">
//                             <div className="w-full max-w-2xl aspect-video bg-white rounded-lg shadow-lg p-4 border-4 border-blue-900">
//                                 <h2>
//                                 Strategies that get you on the path to success
//                                 </h2>
//                                 <p>
//                                 Through an in-depth knowledge of all industrial sectors and the application of approaches such as Lean Strategy, and Business Design, we prepare organisations to welcome change, to be ready to evolve rapidly while remaining competitive in the market.
//                                 </p>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomeNextBusiness
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Layers, TrendingUp, Building2 } from 'lucide-react'

const StrategyBox = ({ icon, title, delay, className }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className={`bg-white h-50 w-50 py-12 px-4 m-auto rounded-[15px] shadow-md transition-all duration-300 ${className}`}
        >
            <div className={`w-12 h-12 m-auto rounded-full flex items-center justify-center mb-4 ${title.includes('Business Agility') ? 'bg-blue-100' :
                    title.includes('Strategic Goal') ? 'bg-pink-100' :
                        title.includes('Action Roadmap') ? 'bg-cyan-100' : 'bg-green-100'
                }`}>
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-purple-900">{title}</h3>
        </motion.div>
    )
}

export default function StrategiesComponent() {
    return (
        <div className=" bg-gray-100  min-h-screen p-8 md:p-16"
            style={{
                backgroundImage: 'linear-gradient(0deg, #E9E9F9 0.76%, #E1E2FF00 100%)',


            }}
        >
            <h1 className="text-5xl font-bold text-center mb-6  mx-auto text-gray-800 ">
                Develop your next business today
            </h1>
            <div className="text-s  text-center mb-2 text-gray-400  mx-auto">
                We design new concepts, prototypes and processes for the next <br/> generation of services and experiences, ready for the market.
            </div>
            <div className="max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* <div className="flex gap-8 space-y-8 ">
                        <div className="grid grid-cols-1  gap-8 "style={{paddingRight:'56%'}}>
                            <StrategyBox
                                icon={<Clock className="w-6 h-6 text-blue-500" />}
                                title="Business Goal Definition"
                                delay={0.2}
                                className=""
                            />
                            <StrategyBox
                                icon={<Layers className="w-6 h-6 text-pink-500" />}
                                title="Strategic Goal Definition"
                                delay={0.4}
                            />
                        </div>
                        <div className="grid grid-cols-1  gap-8  absolute t-[-20px]  "style={{left:'27%'}}>
                            <StrategyBox
                                icon={<TrendingUp className="w-6 h-6 text-cyan-500" />}
                                title="Action Roadmap Definition"
                                delay={0.4}
                            />
                            <StrategyBox
                                icon={<Building2 className="w-6 h-6 text-green-500" />}
                                title="Business Model Analysis"
                                delay={0.6}
                            />
                        </div>
                    </div> */}
                    <div className="mt-20" style={{textAlign:'left'}}>
                        <h2 className="text-3xl font-bold text-purple-900 mb-4">
                            Strategies that get you on the path to success
                        </h2>
                        <p className="text-purple-700 mb-6">
                            Through an in-depth knowledge of all industrial sectors and the application of approaches such as Lean Strategy, and Business Design, we prepare organisations to welcome change, to be ready to evolve rapidly while remaining competitive in the market.
                        </p>
                        <a
                            href="#"
                            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                        >
                            See How it Works →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}