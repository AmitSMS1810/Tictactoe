import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a company committed to delivering the best products and services.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-2">Email: info@example.com</p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
