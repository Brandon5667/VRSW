export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About VRS of Wilson</h1>
          <p className="text-xl text-gray-100">Honoring service. Supporting community. Changing lives.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Story</h2>
          <p className="text-gray-700 text-lg mb-6">
            Veterans Residential Services of Wilson was founded on the principle that those who have served our country deserve our unwavering support. We believe that veterans are valuable members of our community whose contributions extend far beyond their military service.
          </p>
          <p className="text-gray-700 text-lg mb-6"> Through case managment services and working with other community resources, VRSW assists low-income Veterans with their goal of achieving stable housing.
          </p>
          <p className="text-gray-700 text-lg mb-6">To do this, VRSW works with the North Carolina Veterans Affairs Office, Vocational Rehabilitation, DAV, VFW, American Legion, Vietnam Veterans Associations (VVA), Department of Social Services, Community Colleges, employers and other area resources.
          </p>
          <p className="text-gray-700 text-lg mb-6">By working together with the Veterans and local agencies, VRSW tries to identify resources to assist the Veteran with housing and other needs associated with independent living.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Since our establishment, we have been committed to providing compassionate, comprehensive services to Veterans and their families. Our work is guided by respect, dignity, and a deep commitment to making a positive difference in the lives of those we serve.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-navy mb-3">Respect</h3>
              <p className="text-gray-700">
                We honor the service and sacrifice of veterans and approach each person with dignity and respect.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-navy mb-3">Compassion</h3>
              <p className="text-gray-700">
                We provide compassionate care and support, understanding the unique challenges veterans face.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-navy mb-3">Integrity</h3>
              <p className="text-gray-700">
                We maintain the highest standards of ethical conduct in all our operations and interactions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-navy mb-3">Community</h3>
              <p className="text-gray-700">
                We believe in the power of community and foster connections among veterans and supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 text-center">
              <div className="w-32 h-32 bg-navy rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-navy mb-2">Executive Director</h3>
              <p className="text-gray-700">Leading our organization with passion and commitment</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-32 h-32 bg-navy rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-navy mb-2">Program Manager</h3>
              <p className="text-gray-700">Overseeing our comprehensive veteran support programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
