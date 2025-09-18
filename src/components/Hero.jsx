import React from 'react';

function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="professional dental office interior hero banner - hero section background with text overlay"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4F4F]/70 to-[#708090]/50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="luxury-heading text-5xl md:text-7xl font-bold mb-6">
            Transform Your <span className="text-[#C0C0C0]">Smile</span>
          </h1>
          <p className="luxury-subheading text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience luxury dental care in a spa-like environment
          </p>
          <button className="bg-gradient-to-r from-[#708090] to-[#C0C0C0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#2F4F4F] hover:to-[#708090] transition-all transform hover:scale-105">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;