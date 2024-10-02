import React from 'react'

const HomeBusiness = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen container">
            <div className="md:w-1/2 pl-6 md:pl-12 flex items-center justify-center">
                <div className="relative w-full max-w-lg aspect-square">
                    <img
                        src="https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/business-imgg.png"
                        alt="Financial App Interface"
                        
                        className="rounded"
                        style={{
                            height:'600px',
                            height:'600px',
                            
                        }}
                    />
                </div>
            </div>
            <div className="md:w-1/2 pl-6 md:pl-12 flex flex-col justify-center" style={{ textAlign: 'left' }}>
                <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                    We're building business for <br />your digital economy
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    We are building business, banking products and services to support the next generation of entrepreneurs. The world as we know it is no longer the same, and changes now occur in days and months, not years. Get started!
                </p>
                <div className="flex gap-7 mb-8">
                    <div>
                        <h2 className="text-5xl font-bold text-green-500">120k</h2>
                        <p className="text-purple-900 font-semibold">Business Consultants</p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold text-green-500">370+</h2>
                        <p className="text-purple-900 font-semibold">Startups in 2023</p>
                    </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default HomeBusiness
