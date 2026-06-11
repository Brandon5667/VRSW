export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "James Martinez",
      title: "Army Veteran",
      content: "VRS Wilson changed my life. The housing assistance and counseling services helped me get back on my feet after my discharge. I'm forever grateful.",
      image: "JM"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Navy Veteran",
      content: "The employment support program was exactly what I needed. They helped me transition my military skills to a civilian career. Highly recommend!",
      image: "SJ"
    },
    {
      id: 3,
      name: "Robert Chen",
      title: "Marine Corps Veteran",
      content: "The peer support groups here are amazing. It's comforting to connect with other veterans who understand what we've been through.",
      image: "RC"
    },
    {
      id: 4,
      name: "Michelle Davis",
      title: "Air Force Veteran",
      content: "Professional, compassionate staff who truly care about veterans' wellbeing. They went above and beyond to help my family adjust.",
      image: "MD"
    },
    {
      id: 5,
      name: "David Thompson",
      title: "Army Veteran",
      content: "The counseling services helped me work through PTSD. The therapists are knowledgeable and created a safe space for healing.",
      image: "DT"
    },
    {
      id: 6,
      name: "Jennifer Rodriguez",
      title: "Coast Guard Veteran",
      content: "What impressed me most is the holistic approach to support. They address housing, mental health, employment - everything a veteran needs.",
      image: "JR"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veteran Testimonials</h1>
          <p className="text-xl text-gray-100">Hear from those we've had the honor to serve</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gold mb-4">500+</div>
              <p className="text-xl">Veterans Supported</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gold mb-4">95%</div>
              <p className="text-xl">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gold mb-4">10+ yrs</div>
              <p className="text-xl">In Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Share Your Story</h2>
          <p className="text-gray-700 text-lg mb-8">
            We'd love to hear from you! If you're a veteran or know someone who has benefited from our services, we invite you to share your story. Your experiences inspire others and help us continue our important work.
          </p>
          <button className="cta-button">
            Contact Us to Share
          </button>
        </div>
      </section>
    </div>
  )
}
