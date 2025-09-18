import React from 'react';

function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="luxury-heading text-4xl font-bold text-[#708090] mb-6 uppercase">
              Premium Oral Care Products
            </h2>
            <p className="text-[#696969] mb-6 leading-relaxed">
              Discover our curated selection of professional-grade oral care products designed to maintain 
              your beautiful smile between visits.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#708090] rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-[#2F2F2F]">Professional whitening kits</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#708090] rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-[#2F2F2F]">Electric toothbrushes</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#708090] rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-[#2F2F2F]">Specialized toothpaste</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#708090] rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-[#2F2F2F]">Mouthwash and rinses</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/7581577/pexels-photo-7581577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="professional skincare product packaging photo - skincare products showcase section"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/7581577/pexels-photo-7581577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="professional skincare product packaging photo - skincare products showcase section"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;