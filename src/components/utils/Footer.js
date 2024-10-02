
import { Link } from 'react-router-dom';

import { Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-purple-900 text-white py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto " style={{ textAlign: 'left' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div className="col-span-12 md:col-span-6 space-y-4"> {/* Full width on mobile, 6 on medium and larger screens */}
    <Link href="/" className="text-2xl font-bold">Converta</Link>
    <p className="text-sm text-gray-300">
      Creative-powered to fuel your growth goals. We build world-class digital products, software, and branding.
    </p>
  </div>
  <div className="col-span-12 md:col-span-2"> {/* Full width on mobile, 2 on medium and larger screens */}
    <h3 className="text-lg font-semibold mb-4">Products</h3>
    <ul className="space-y-2">
      {['Unify App', 'Page Builder', 'Templates', 'Pricing'].map((item) => (
        <li key={item}>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  <div className="col-span-12 md:col-span-2"> {/* Full width on mobile, 2 on medium and larger screens */}
    <h3 className="text-lg font-semibold mb-4">Resources</h3>
    <ul className="space-y-2">
      {['Design', 'Inspiration', 'Blog', 'Jobs'].map((item) => (
        <li key={item}>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  <div className="col-span-12 md:col-span-2"> {/* Full width on mobile, 2 on medium and larger screens */}
    <h3 className="text-lg font-semibold mb-4">Support</h3>
    <ul className="space-y-2">
      {['Documentation', 'Help Desk', 'Video Guides', 'Security'].map((item) => (
        <li key={item}>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>


                <div className="mt-12 pt-8 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        © 2023 Converta Theme. Codeless, LLC. San Francisco, California. USA.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Youtube className="w-5 h-5" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}