import React from 'react';
import business from '../Images/business.jpeg';

function Homepage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-12 space-y-8 lg:space-y-0">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to Your Dream Website
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Discover a world of amazing possibilities. Our platform offers everything you need to grow your business and inspire creativity.
            </p>
            <div className="mt-6">
              <a 
                href="#" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a 
                href="#learn-more" 
                className="ml-4 px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 ml-10">
            <img src={business} alt="Hero Image" className="rounded-lg shadow-lg h-auto" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature One */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p className="text-gray-600">
                Discover powerful tools that help you build faster and smarter.
              </p>
            </div>

            {/* Feature Two */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p className="text-gray-600">
                Experience seamless integration with all your favorite platforms.
              </p>
            </div>

            {/* Feature Three */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
              <p className="text-gray-600">
                Our intuitive interface makes everything easy and efficient.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
