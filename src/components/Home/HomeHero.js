import React from 'react'
import { useMediaQuery } from 'react-responsive';

const HomeHero = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    return (
        <div className="h-[77vh] bg-gradient-to-br  flex items-center justify-center " style={{ 
            background: isDesktop ? 'url(https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/business-hero.jpeg) no-repeat center / cover' : '#e9e9f9'
            
        }}>
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col" style={{textAlign:'left',
        lineHeight: '26px'}}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-purple-900">Designing your</span>
            <br />
            <span className="text-blue-400">next business.</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Small business, big opportunity? We help our clients exploit technology to
            strategically reshape their business around digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">Discover Now</button>
            <button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg">How it Works</button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative">
          
        </div>
    </div>
    )
}

export default HomeHero
