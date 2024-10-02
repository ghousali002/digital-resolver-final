import { useState } from 'react'
// import { Switch } from '@/components/ui/switch'

export default function HomePrice() {
    const [isYearly, setIsYearly] = useState(false)

    const pricingTiers = [
        {
            name: 'Personal',
            price: isYearly ? '14' : '19',
            features: [
                'Unlimited guest reviewers',
                'Unlimited projects',
                'Dedicated support',
                'Lifetime updates',
                'No setup fees',
            ],
        },
        {
            name: 'Startup',
            price: isYearly ? '25' : '29',
            features: [
                'Unlimited guest reviewers',
                'Unlimited projects',
                'Dedicated support',
                'Lifetime updates',
                'No setup fees',
            ],
        },
        {
            name: 'Business',
            price: isYearly ? '49' : '59',
            features: [
                'Unlimited guest reviewers',
                'Unlimited projects',
                'Dedicated support',
                'Lifetime updates',
                'No setup fees',
            ],
        },
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-4">
                Pricing built for businesses of all sizes
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Scale your software operations through a custom engineering team.
                <br />
                Meet the demand of your company's
            </p>
            <div className="flex justify-center items-center space-x-4 mb-12">
                <label className="inline-flex items-center cursor-pointer">
                    <span className={`mr-3 text-sm ${!isYearly ? 'text-purple-800 font-semibold' : 'text-gray-600'}`}>Monthly</span>

                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly</span>
                </label>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-lg">Save 25%</span>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                    <div key={tier.name} className="border rounded-[20px]  " style={{ overflow: 'hidden' }}>
                        <div className='p-8 flex flex-col'>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">{tier.name}</h2>
                            <div className="text-4xl font-bold text-purple-800 mb-4">
                                <span className="text-2xl align-bottom">$</span>
                                {tier.price}
                                {!isYearly ?
                                    <span className="text-2xl align-bottom">.00</span>:
                                    <span className="text-2xl align-bottom">.99</span>
                                }
                                <span className="text-lg font-normal text-gray-600">/month</span>
                            </div>
                            <hr />
                            <ul className="mb-8 mt-3 flex-grow">
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center mb-2">
                                        <svg
                                            className="w-4 h-4 mr-2 text-blue-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`w-full py-4 px-4 text-white font-semibold bg-blue-600 hover:bg-blue-500
                                `}
                        >
                            Start 14-free day trial
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}