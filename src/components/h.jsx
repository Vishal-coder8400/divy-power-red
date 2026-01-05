<section className="m-10">
  <div className="GetfontHomeDash max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-stretch relative mt-14">

    {/* Left: Images */}
    <div className="relative flex flex-col justify-center h-full">
      {/* Main Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg h-full">
        <img
          src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg"
          alt="Solar Field"
          className="rounded-xl object-cover w-full h-full min-h-[400px]"
        />
      </div>

      {/* Stacked Image for large screens */}
      <div className="absolute md:bottom-[-40px] md:left-[60px] w-3/4 border-4 border-white rounded-xl overflow-hidden shadow-xl md:block hidden">
        <img
          src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
          alt="Solar Roof Work"
          className="rounded-xl object-cover w-full h-[200px] md:h-[250px]"
        />
      </div>

      {/* Small screen stacked image below */}
      <div className="md:hidden mt-6 w-full border-4 border-white rounded-xl overflow-hidden shadow-xl">
        <img
          src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
          alt="Solar Roof Work"
          className="rounded-xl object-cover w-full h-[200px]"
        />
      </div>
    </div>

    {/* Right: Text Content */}
    <div className="text-gray-800 flex flex-col justify-center h-full px-2 sm:px-0">
      <h3 className="text-xl font-semibold text-green-800 tracking-wider uppercase mb-2">
        About Us
      </h3>
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
        We Don’t Just Sell Solar. <br className="hidden sm:block" /> We Engineer Smart Power Solutions.
      </h2>
      <p className="text-base leading-relaxed mb-4">
        At <strong>DIVY Power</strong>, we believe solar isn’t just a product, it’s your power freedom.
        From site assessment to installation and support, we handle everything.
      </p>
      <p className="text-base leading-relaxed mb-4">
        We’ve been lighting lives responsibly for over a decade as an authorized partner of <strong>Tata Power Solar</strong>.
        Backed by Tata’s legacy of trust, we deliver cost-effective solar solutions that prioritize energy safety,
        quality, and long-term performance.
      </p>
      <p className="text-base leading-relaxed">
        From planning to financing, and installation to maintenance, we offer customized solar services required to meet your project’s needs.
        With us, you don’t just go solar — you go <strong>safe, smart, and sustainable</strong>.
      </p>
    </div>
  </div>
</section>