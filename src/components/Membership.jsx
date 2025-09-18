import React from 'react';

function Membership() {
  return (
    <section className="py-20 bg-[#2F4F4F]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="luxury-heading text-4xl font-bold text-[#C0C0C0] mb-6 uppercase">
          Exclusive Membership Program
        </h2>
        <p className="text-white text-lg mb-8 leading-relaxed">
          Join our premium membership and enjoy exclusive benefits including priority booking, 
          discounted services, and complimentary annual cleanings.
        </p>
        <button className="border-2 border-[#C0C0C0] text-[#C0C0C0] px-8 py-3 rounded-md hover:bg-[#C0C0C0] hover:text-[#2F4F4F] transition-colors">
          Become a Member
        </button>
      </div>
    </section>
  );
}

export default Membership;