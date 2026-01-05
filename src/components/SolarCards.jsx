import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../Images/Blog1.jpg';
import Blog2 from '../Images/Blog2.jpg';

const cardData = [
  {
    image: Blog1,
    date: 'March 25, 2025',
    tag: 'Solar Solution',
    title:
      'Title: Powering the Future: Unlocking the Potential of Solar Energy for Your Business',
    name: 'SolarArticle',
    path: '/Blog1',
  },
  {
    image: Blog2,
    date: 'Nov 27, 2024',
    tag: 'Solar Solution',
    title: 'Embracing Solar Energy: A Path to Sustainable Profitability',
    name: 'SustainableProfitability',
    path: '/Blog2',
  },
];

const SolarCards = () => {
  return (
    <div className="bg-white w-full px-4 py-16 GetFontSol">

      {/* Heading */}
      <div className="max-w-screen-xl mx-auto text-center mb-16 px-2">
        <h2 className="text-[#C4302C] text-sm sm:text-base md:text-lg font-semibold">
          Quality Handyman Solution
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#090971]">
          Inside Story Of <span className="text-[#739131]">Our Company</span>
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-screen-xl mx-auto">

        {cardData.map((card, index) => (
          <article
            key={index}
            className="
              bg-white 
              rounded-2xl 
              shadow-md 
              overflow-hidden 
              border border-gray-200
              hover:shadow-xl 
              hover:-translate-y-2 
              transition-all 
              duration-300
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="
                  w-full 
                  h-56 
                  sm:h-64 
                  md:h-72 
                  object-cover 
                  transform 
                  hover:scale-105 
                  transition-all 
                  duration-500
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Meta */}
              <div className="flex justify-between flex-wrap text-xs sm:text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-[#C4302C]" />
                  <span className='text-[#C4302C]'>{card.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-tag text-[#C4302C]" />
                  <span className='text-[#C4302C]'>{card.tag}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg text-[#090971] font-semibold leading-snug mb-5 uppercase">
                {card.title}
              </h3>

              {/* Button */}
              <Link
                to={card.path}
                className="
                  inline-flex 
                  items-center 
                  border 
                  bg-[#739131] 
                  text-white
                  px-5 
                  py-2 
                  text-xs 
                  sm:text-sm 
                  rounded-lg 
                  hover:bg-[#739131]
                  transition-all
                "
              >
                Read Details
                <i className="fas fa-arrow-right ml-2 text-xs" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};

export default SolarCards;
