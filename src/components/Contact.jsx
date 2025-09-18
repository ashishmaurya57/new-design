import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl font-bold text-center text-[#708090] mb-12 uppercase">
          Visit Our Office
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959472827!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2F2F2F]">Name</label>
                <input type="text" className="mt-1 block w-full border border-[#D3D3D3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#708090] focus:border-[#708090]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2F2F2F]">Email</label>
                <input type="email" className="mt-1 block w-full border border-[#D3D3D3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#708090] focus:border-[#708090]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2F2F2F]">Phone</label>
                <input type="tel" className="mt-1 block w-full border border-[#D3D3D3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#708090] focus:border-[#708090]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2F2F2F]">Message</label>
                <textarea rows={4} className="mt-1 block w-full border border-[#D3D3D3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#708090] focus:border-[#708090]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#708090] text-white py-3 rounded-md hover:bg-[#2F4F4F] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;