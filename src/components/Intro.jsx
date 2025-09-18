import React from 'react';

function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="luxury-heading text-4xl font-bold text-[#2F2F2F] mb-6 uppercase">
          Welcome to <span className="luxury-subheading text-[#708090] normal-case">Dental Excellence</span>
        </h2>
        <p className="text-lg text-[#696969] mb-8 leading-relaxed">
          We believe that exceptional dental care should be as comfortable and luxurious as a spa experience. 
          Our state-of-the-art facility combines cutting-edge technology with personalized attention to deliver 
          the smile you've always dreamed of.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#708090] text-white px-6 py-3 rounded-md hover:bg-[#2F4F4F] transition-colors">
            Our Services
          </button>
          <button className="border-2 border-[#708090] text-[#708090] px-6 py-3 rounded-md hover:bg-[#708090] hover:text-white transition-colors">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;