import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'MR_HMMM',
      role: 'CEO & FOUNDER',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      name: 'ZIGGY',
      role: 'DEV & PARTNER',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300&h=300'
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">
          <ArrowDownRight className="section-arrow" />
          MEET THE TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="team-card w-64 h-64 mx-auto mb-6">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-3xl font-bold mb-2">/{member.name}</h3>
              <p className="text-gray-400">/{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;