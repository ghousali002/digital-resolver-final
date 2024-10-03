import React from 'react'
import { useMediaQuery } from 'react-responsive';

const AboutHero = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <div className="h-[77vh] bg-gradient-to-br  flex items-center justify-center " style={{
            background: isDesktop ? 'url(https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/business-hero.jpeg) no-repeat center / cover' : '#e9e9f9'

        }}>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col" style={{
                textAlign: 'left',
                lineHeight: '26px'
            }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-purple-900">Growth strategies to be </span>
                    <br />
                    <span className="text-blue-400">effective & competitive</span>
                </h1>
                <p className="text-gray-600 mb-8">
                    Everything we do and dream up has a solid design impact. We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className=" bg-blue-600 hover:bg-purple-700 text-white font-bold py-4 px-4 duration-300 rounded-md w-40">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">

            </div>
        </div>

    )
}

export default AboutHero
