import React from 'react';

function Services() {
  const services = [
    {
      title: "Teeth Whitening",
      image: "https://images.pexels.com/photos/33916728/pexels-photo-33916728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "tooth whitening procedure photo for dental service card - cosmetic service showcase"
    },
    {
      title: "Dental Implants",
      image: "https://images.pexels.com/photos/6663367/pexels-photo-6663367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "joint replacement surgery photo for orthopedic services grid - services grid showcasing treatments"
    },
    {
      title: "Cosmetic Dentistry",
      image: "https://images.pexels.com/photos/33916728/pexels-photo-33916728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "tooth whitening procedure photo for dental service card - cosmetic service showcase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-[#D3D3D3]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl font-bold text-center text-[#2F2F2F] mb-12 uppercase">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4F4F]/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold uppercase">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <button className="w-full bg-[#708090] text-white py-2 rounded-md hover:bg-[#2F4F4F] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;