import React from 'react';

const ConstructionHome = () => {
  return (
    <div className="bg-[#f5f7fa] min-h-screen font-['Montserrat']">
      <main className="max-w-[1200px] mx-auto mt-6 px-4 sm:px-6 md:px-8">
        <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-[#7ec0f7] to-[#5aa0e7] flex flex-col md:flex-row md:items-center" style={{ minHeight: '500px' }}>

          {/* Logo */}
          <div className="absolute top-0 left-0 bg-white rounded-tr-[30px] rounded-bl-[30px] px-4 py-3 flex items-center space-x-3 z-10 shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#0a0a23] text-white font-bold text-lg flex items-center justify-center">1</div>
            <div className="text-xs font-bold text-[#0a0a23] leading-tight">
              GREAT<br />VISAYAN<br />BUILDERS
            </div>
          </div>

          {/* Navigation */}
          <nav className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#0a0a23] rounded-full px-6 py-2 flex space-x-8 text-white text-sm font-semibold z-10 shadow-lg">
            <a className="hover:underline" href="#">SERVICES</a>
            <a className="hover:underline" href="#">GALLERY</a>
            <a className="hover:underline" href="#">ABOUT US</a>
          </nav>

          {/* Contact */}
          <div className="absolute top-6 right-6 bg-[#0a0a23] rounded-full px-4 py-2 flex items-center space-x-2 text-white text-xs font-semibold z-10 shadow-md">
            <i className="fas fa-phone-alt text-[10px]" />
            <span>CONTACT US</span>
            <span className="bg-white text-[#0a0a23] rounded-full px-2 py-[2px] font-bold">+639-2145-251</span>
          </div>

          {/* Left Content */}
          <div className="flex-1 p-8 md:p-12 max-w-lg z-10">
            <p className="text-xs text-[#1f2937] mb-1 font-semibold">LOREM IPSUM LOREM</p>
            <h1 className="text-[#1f2937] font-extrabold text-4xl sm:text-5xl leading-tight mb-6">
              FINDING YOUR NEW<br />HOME MADE SIMPLE
            </h1>
           <form className="mt-8 max-w-md">
  <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 focus-within:ring-2 focus-within:ring-[#f59e0b]">
    <i className="fas fa-map-marker-alt text-gray-500 text-sm mr-3"></i>
    <input
      type="text"
      placeholder="Enter your location"
      className="flex-1 border-none outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
    />
  </div>
</form>


          </div>

          {/* Image & Reviews */}
          <div className="flex-1 relative h-full min-h-[400px]">
            <img
              src="https://storage.googleapis.com/a1aa/image/86300a2b-761a-47a8-a81d-469eea886e55.jpg"
              alt="Modern white building"
              className="w-full h-full object-cover rounded-tr-[30px] rounded-br-[30px]"
            />
            <div className="absolute bottom-6 right-6 bg-[#0a0a23] rounded-tl-[30px] rounded-br-[30px] p-4 flex items-center space-x-4 max-w-xs text-white shadow-lg">
              <div className="flex space-x-[-12px]">
                <img src="https://storage.googleapis.com/a1aa/image/b4fa1898-5409-4176-32ec-2791881d2c2b.jpg" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://storage.googleapis.com/a1aa/image/4d17a87f-504b-4cda-41b8-9eea0110813a.jpg" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://storage.googleapis.com/a1aa/image/1316c84a-5d05-4569-9ae2-8dbacb3153e7.jpg" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">Google Reviews</span>
                  <i className="fas fa-arrow-right text-sm" />
                </div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold">5 Star Rating!</p>
                <p className="text-xs text-gray-300">Check out the positive feedback our customers gave us.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConstructionHome;