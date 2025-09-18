import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="luxury-heading text-lg font-semibold mb-4 uppercase">About Us</h3>
            <p className="text-gray-300 text-sm">
              Providing luxury dental care with cutting-edge technology and personalized attention.
            </p>
          </div>
          <div>
            <h3 className="luxury-heading text-lg font-semibold mb-4 uppercase">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Stay updated with our latest offers and tips</p>
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400" />
          </div>
          <div>
            <h3 className="luxury-heading text-lg font-semibold mb-4 uppercase">Contact</h3>
            <p className="text-gray-300 text-sm">123 Luxury Dental Ave</p>
            <p className="text-gray-300 text-sm">New York, NY 10001</p>
            <p className="text-gray-300 text-sm">(555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Dental Excellence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;