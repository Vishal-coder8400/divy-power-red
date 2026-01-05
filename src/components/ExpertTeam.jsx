import React from 'react';

const teamMembers = [
  {
    name: 'Mark Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg',
  },
  {
    name: 'John Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg',
  },
  {
    name: 'Arvvani Joe',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg',
  },
  {
    name: 'Matchine Mue',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
  },
];

const ExpertTeam = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 -mt-24 sm:px-6 lg:px-8 GetFontSol">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl GetFontSol mb-12">Expert Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 relative hover:shadow-lg transition-all GetFontSol">
              <div className="relative rounded-lg overflow-hidden GetFontSol">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
                <button
                  aria-label={`Play video for ${member.name}`}
                  className="absolute bottom-3 left-3 bg-green-800 hover:bg-green-700 text-white rounded-full p-3 shadow-md"
                >
                  <i className="fas fa-play" />
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg GetFontSol">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;
