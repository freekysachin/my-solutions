import React, { useEffect, useState } from 'react';

function HeroFourth() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let path = process.env.REACT_APP_API_URL + '/list-projects';
        console.log('Fetching from:', path);

        const response = await fetch(path);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    // ✅ Call the function here
    fetchProjects();
  }, []);

  return (
    <section className="bg-[#f9fbff] py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">Our Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-40 bg-gray-200">
              <img
                src={project.imgPath}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-blue-600 font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroFourth;
