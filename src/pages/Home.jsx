import { Link } from 'react-router-dom'
import army from '../assets/Emblem_of_the_U.S._Department_of_the_Army.svg.png'
import marines from '../assets/emblem_of_the_United_States_Marine_Corps.svg.png'
import navy from '../assets/Seal_of_the_United_States_Department_of_the_Navy.svg.png'
import airforce from '../assets/Seal_of_the_United_States_Department_of_the_Air_Force.svg.png'
import coastguard from '../assets/Seal_of_the_U.S._Coast_Guard.svg.png'
import spaceforce from '../assets/seal_of_the_United_States_Space_Force.svg.png'
import flag from '../assets/US-Flag.png'
import pow from '../assets/pow_flag.png'
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center">
            <img src={flag} alt="American Flag" className="h-16 sm:h-24 md:h-32 w-auto" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Veterans Residential Service of Wilson
            </h1>
            <img src={pow} alt="POW Flag" className="h-14 sm:h-18 md:h-24 w-auto" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <img src={army} alt="U.S. Army Emblem" className="h-12 sm:h-16 md:h-20 w-auto" />
            <img src={marines} alt="U.S. Marine Corps Emblem" className="h-12 sm:h-16 md:h-20 w-auto" />
            <img src={navy} alt="U.S. Navy Emblem" className="h-12 sm:h-16 md:h-20 w-auto" />
            <img src={airforce} alt="U.S. Air Force Emblem" className="h-12 sm:h-16 md:h-20 w-auto" />
            <img src={spaceforce} alt="U.S. Space Force Emblem" className="h-12 sm:h-16 md:h-20 w-auto" />
            <img src={coastguard} alt="U.S. Coast Guard Emblem" className="h-12 sm:h-16 md:h-20 w-auto" />
          </div>

          <p className="mt-6 text-base sm:text-lg md:text-2xl text-gray-100">
            Dedicated to serving and supporting veterans in Wilson, Nash and surronding counties
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services" className="cta-button w-full sm:w-auto">
              Our Services
            </Link>
            <Link to="/contact" className="cta-button w-full sm:w-auto">
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
            Veterans Residential Services of Wilson's mission is to provide quality support and services to it's
            low-income and at risk Veterans and to enpower them to realize the goals of residential stability in the community.
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
              <h3 className="text-2xl font-bold text-navy mb-3">Locating Housing</h3>
              <p className="text-gray-700">
                Helping veterans find affordable housing solutions for themselves and their families
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-3">Job Search</h3>
              <p className="text-gray-700">
                Resume Building, Education, and Job Placement Assistance
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-3">Benefit Acquisition Assistance</h3>
              <p className="text-gray-700">
                Helping Veterans access the benefits they have earned through their service, including healthcare, education, and financial support
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
