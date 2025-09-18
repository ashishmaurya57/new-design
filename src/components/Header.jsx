import React from 'react';

function Header() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="luxury-heading text-2xl font-bold text-[#708090]">Dental Excellence</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-[#2F2F2F] hover:text-[#708090] px-3 py-2 text-sm font-medium uppercase tracking-wider">Home</a>
              <a href="#services" className="text-[#2F2F2F] hover:text-[#708090] px-3 py-2 text-sm font-medium uppercase tracking-wider">Services</a>
              <a href="#products" className="text-[#2F2F2F] hover:text-[#708090] px-3 py-2 text-sm font-medium uppercase tracking-wider">Products</a>
              <a href="#contact" className="text-[#2F2F2F] hover:text-[#708090] px-3 py-2 text-sm font-medium uppercase tracking-wider">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#708090] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2F4F4F] transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;