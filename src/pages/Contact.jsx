import { useState } from 'react'
import map from '../assets/vrsw_maps.png'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-100">We're here to help and answer any questions you might have</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-4xl mb-4 text-gold">📍</div>
              <h3 className="text-2xl font-bold text-navy mb-3">Address</h3>
              <p className="text-gray-700">
                2500 Nash St. N #E<br />
                Wilson, NC 27896
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4 text-gold">📞</div>
              <h3 className="text-2xl font-bold text-navy mb-3">Phone</h3>
              <p className="text-gray-700">
                (252) 237-4478<br />
                Tues - Thurs: 9am - 1pm
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4 text-gold">✉️</div>
              <h3 className="text-2xl font-bold text-navy mb-3">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:vrswvets@gmail.com" className="text-blue-500 hover:underline">
                  vrswvets@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg hidden">
            <h2 className="section-title text-center mb-8">Send us a Message</h2>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-navy font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-navy font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-navy font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-navy font-semibold mb-2 ">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cta-button text-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
  
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-8">Find Us</h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-600 text-lg">
              <img src={map} alt="U.S. Coast Guard Emblem" className="h-12 sm:h-16 md:h-96 w-auto" /></span>
          </div>
        </div>
      </section>
    </div>
  )
}
