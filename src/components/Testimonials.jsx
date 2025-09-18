import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "client portrait editorial style medical spa testimonial section - reviews section testimonial portrait",
      text: "The most luxurious dental experience I've ever had. The staff is incredibly professional and the results are amazing!"
    },
    {
      name: "Michael Chen",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "portrait headshot photo for team profile cards - team section profile grid portraits",
      text: "I never thought I'd look forward to dental visits, but this place changed everything. Highly recommend!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#D3D3D3] to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl font-bold text-center text-[#2F2F2F] mb-12 uppercase">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#696969] italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-[#2F2F2F]">- {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;