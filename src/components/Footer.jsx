import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-section mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="font-bold text-lg text-gold mb-4">VRS Wilson</h3>
            <p className="text-gray-300">Serving and supporting veterans in our community.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Email: <a href="mailto:vrswvets@gmail.com.com">vrswvets@gmail.com</a>
</p>
            <p className="text-gray-300">Phone: (252) 237-4478</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition">Facebook</a>
              <a href="#" className="hover:text-gold transition">Twitter</a>
              <a href="#" className="hover:text-gold transition">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 py-8 text-center text-gray-400">
          <p>&copy; 2012 Veterans Residential Services of Wilson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
