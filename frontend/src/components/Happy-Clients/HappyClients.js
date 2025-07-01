import React, { useEffect, useState } from 'react';

const HappyClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const path = process.env.REACT_APP_API_URL + '/list-clients';
        const res = await fetch(path);
        const data = await res.json();
        setClients(data);
      } catch (error) {
        console.error('Failed to fetch clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Happy Clients</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-[#f9fbff] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img
                src={client.imgPath}
                alt={client.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {client.description}
            </p>
            <h3 className="text-blue-600 font-semibold">{client.name}</h3>
            <p className="text-xs text-gray-500">{client.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
