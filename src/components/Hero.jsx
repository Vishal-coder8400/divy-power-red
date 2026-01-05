import React from 'react';

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 bg-[#f8f7f0] GetFontSol">
      {/* Left Text Section */}
      <section className="max-w-xl flex flex-col gap-4 md:gap-6">
        <p className="text-xs font-semibold text-[#00B36A] uppercase tracking-wider">
          Professional Install
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
          We are The Leader on
          <br />
          <span className="text-[#00B36A]">The American Market</span>
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          We draw on 25 years of experience, implementing our own vision of a
          sustainable business based on the latest technologies and knowledge of
          experts passionate about renewable energy.
        </p>
        <p className="text-xs font-semibold text-gray-900">
          If you have any Questions
          <br />
          <a
            className="text-[#00B36A] font-bold hover:underline"
            href="tel:+12506502000"
          >
            Feel free to contact +1 250 650 2000
          </a>
        </p>
      </section>

      {/* Image Section */}
      <section className="flex-shrink-0">
        <img
          src="https://storage.googleapis.com/a1aa/image/baa72b11-3602-4fb5-25a9-1ef716d0b35a.jpg"
          alt="Man in white shirt and gray cap with arms crossed smiling"
          className="w-72 h-auto object-contain"
          width="300"
          height="300"
        />
      </section>
    </main>
  );
};

export default Hero;
