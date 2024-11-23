import React from 'react';
import { fame } from '../assets/fame'; 

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <header 
        className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-8 py-16 bg-gradient-to-r from-orange-200 to-orange-100"
      >
        <img 
          src={fame.pic1_aboutus} 
          alt="Pineapple farm hero" 
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="relative z-10">
          <h1 className="text-5xl mb-4 font-bold">
            <span className="text-white">About us</span>{' '}
            <span className="text-orange-400">Our Pineapple Farm</span>
          </h1>
          <p className="text-white text-2xl mt-4">
            Your premier destination for authentic farm experiences and the finest pineapple products in Thailand.
          </p>
        </div>
      </header>
               {/* Redesigned About Cards Section */}
               <section className="bg-gray-50/50 px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Experience Our Farm</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Agricultural Learning Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl">
                  <div className="absolute -right-16 -top-16 h-40 w-40 bg-green-500/20 rounded-full transition-transform group-hover:scale-150" />
                  <img src={fame.pic2_aboutus} alt="Agricultural Learning" className="w-full h-56 object-cover" />
                  <div className="relative p-8">
                    <div className="absolute -top-8 left-8 flex items-center justify-center w-16 h-16 bg-green-500 rounded-xl shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Agricultural Learning</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Experience our comprehensive pineapple cultivation process with expert guidance and hands-on activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Spots Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl">
                  <div className="absolute -right-16 -top-16 h-40 w-40 bg-orange-400/20 rounded-full transition-transform group-hover:scale-150" />
                  <img src={fame.pic3_aboutus} alt="Photo Spots" className="w-full h-56 object-cover" />
                  <div className="relative p-8">
                    <div className="absolute -top-8 left-8 flex items-center justify-center w-16 h-16 bg-orange-400 rounded-xl shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Photo Spots</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Capture beautiful moments among our vast pineapple fields and scenic viewpoints
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Café & Restaurant Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl">
                  <div className="absolute -right-16 -top-16 h-40 w-40 bg-amber-800/20 rounded-full transition-transform group-hover:scale-150" />
                  <img src={fame.pic4_aboutus} alt="Café & Restaurant" className="w-full h-56 object-cover" />
                  <div className="relative p-8">
                    <div className="absolute -top-8 left-8 flex items-center justify-center w-16 h-16 bg-amber-800 rounded-xl shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Café & Restaurant</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Savor special dishes and beverages made from fresh pineapples harvested from our farm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      {/* Mission Section */}
      <section className="bg-orange-400 text-white px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">
            To cultivate the best pineapples while promoting sustainable agriculture practices that benefit our community and the planet.
          </p>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="relative px-4 py-20 bg-cover bg-center" style={{
        backgroundImage: `url(${fame.pic5_aboutus})`,
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-amber-800">Why</span>
              <br />
              <span className="text-white">Choose</span>
              <br />
              <span className="text-orange-400">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sustainable Farming Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-yellow-400 p-8 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -right-12 -top-12 h-32 w-32 bg-black/10 rounded-full transition-transform group-hover:scale-150" />
              <div className="absolute -right-2 -top-2 h-16 w-16 bg-black/20 rounded-full transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-xl shadow-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sustainable Farming</h3>
                <p className="text-gray-700">We Practice Eco-Friendly Farming Methods To Ensure The Highest Quality Pineapples While Protecting Our Environment.</p>
              </div>
            </div>

            {/* Organic Products Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-orange-400 p-8 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -right-12 -top-12 h-32 w-32 bg-black/10 rounded-full transition-transform group-hover:scale-150" />
              <div className="absolute -right-2 -top-2 h-16 w-16 bg-black/20 rounded-full transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-xl shadow-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Organic Products</h3>
                <p className="text-gray-700">All Our Products Are Naturally Grown Without Harmful Chemicals, Ensuring Healthy And Delicious Offerings.</p>
              </div>
            </div>

            {/* Community Focus Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-lime-400 p-8 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -right-12 -top-12 h-32 w-32 bg-black/10 rounded-full transition-transform group-hover:scale-150" />
              <div className="absolute -right-2 -top-2 h-16 w-16 bg-black/20 rounded-full transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-lime-500 rounded-xl shadow-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Community Focus</h3>
                <p className="text-gray-700">We Work Closely With Local Farmers And Provide Employment Opportunities To Our Community Members.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Redesigned Info Cards Section */}
          <section className="max-w-6xl mx-auto px-4 py-16 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Established Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -right-12 -top-12 h-32 w-32 bg-green-500/20 rounded-full transition-transform group-hover:scale-150" />
                <div className="absolute -right-2 -top-2 h-16 w-16 bg-green-500/40 rounded-full transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Established</h3>
                  <p className="text-4xl font-bold text-green-500">2010</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -right-12 -top-12 h-32 w-32 bg-orange-400/20 rounded-full transition-transform group-hover:scale-150" />
                <div className="absolute -right-2 -top-2 h-16 w-16 bg-orange-400/40 rounded-full transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Location</h3>
                  <p className="text-xl font-semibold text-orange-400">Prachuap Khiri Khan,</p>
                  <p className="text-xl font-semibold text-orange-400">Thailand</p>
                </div>
              </div>

              {/* Farm Size Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -right-12 -top-12 h-32 w-32 bg-amber-800/20 rounded-full transition-transform group-hover:scale-150" />
                <div className="absolute -right-2 -top-2 h-16 w-16 bg-amber-800/40 rounded-full transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-800 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Farm Size</h3>
                  <p className="text-3xl font-bold text-amber-800">50 Rai</p>
                  <p className="text-lg text-gray-600">(80,000 sq.m)</p>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

export default AboutUs;