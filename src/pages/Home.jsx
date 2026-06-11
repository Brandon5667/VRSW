import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to VRS Wilson</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Dedicated to serving and supporting veterans in our community
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/services" className="cta-button">
              Our Services
            </Link>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Veterans Residential Services of Wilson is committed to providing comprehensive support and services to veterans in our community. We believe in honoring the service and sacrifice of those who have served our nation.
          </p>
          <p className="text-gray-700 text-center">
            Through our programs and initiatives, we work to improve the quality of life for veterans and their families, ensuring they have access to the resources they need to thrive.
          </p>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-3">Housing Assistance</h3>
              <p className="text-gray-700">
                Safe, affordable housing solutions for veterans and their families
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-3">Support Services</h3>
              <p className="text-gray-700">
                Counseling, case management, and peer support programs
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-3">Community Programs</h3>
              <p className="text-gray-700">
                Events, workshops, and community engagement initiatives
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="cta-button">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gold py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Help?</h2>
          <p className="text-lg text-navy mb-6">
            Get in touch with us today to learn how we can support you or to make a donation
          </p>
          <Link to="/contact" className="bg-navy text-gold px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
