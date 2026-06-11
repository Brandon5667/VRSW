export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-100">Comprehensive support designed for our veterans</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Housing Assistance</h2>
                <p className="text-gray-700 text-lg mb-4">
                  We provide safe, affordable housing solutions tailored to meet the needs of veterans and their families. Our residential programs include supportive housing with on-site services and case management.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Emergency housing assistance</li>
                  <li>✓ Transitional housing programs</li>
                  <li>✓ Permanent supportive housing</li>
                  <li>✓ Homelessness prevention</li>
                </ul>
              </div>
              <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-400">Housing Program Image</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-400">Counseling Program Image</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Mental Health & Counseling</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Our mental health professionals provide individual and group counseling to help veterans navigate challenges such as PTSD, depression, and anxiety.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Individual counseling</li>
                  <li>✓ Group therapy sessions</li>
                  <li>✓ PTSD treatment</li>
                  <li>✓ Crisis intervention</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Employment Support</h2>
                <p className="text-gray-700 text-lg mb-4">
                  We help veterans find meaningful employment through job training, placement services, and career counseling designed specifically for their transition to civilian careers.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Career counseling</li>
                  <li>✓ Job training programs</li>
                  <li>✓ Resume preparation</li>
                  <li>✓ Employer networking</li>
                </ul>
              </div>
              <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-400">Employment Program Image</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-400">Community Program Image</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Community Programs</h2>
                <p className="text-gray-700 text-lg mb-4">
                  We foster community through events, workshops, and social activities that bring veterans together and build lasting connections.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Social events and activities</li>
                  <li>✓ Educational workshops</li>
                  <li>✓ Peer support groups</li>
                  <li>✓ Family programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <p className="text-lg">Veterans Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">1000+</div>
              <p className="text-lg">Counseling Sessions</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">250+</div>
              <p className="text-lg">Jobs Placed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">100%</div>
              <p className="text-lg">Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
