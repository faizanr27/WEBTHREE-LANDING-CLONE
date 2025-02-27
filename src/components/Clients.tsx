import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'GODJIRA GEN 2',
      image: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'APELIST',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'HELIX METAVERSE',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">
          <ArrowDownRight className="section-arrow" />
          OUR CLIENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div key={client.name} className="client-card">
              <img src={client.image} alt={client.name} className="w-full aspect-square object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-[#39FF14] text-xl">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;