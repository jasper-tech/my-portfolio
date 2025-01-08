

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of project 1. It showcases web development skills with React and Next.js.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    link: '/project-1',
  },
  {
    title: 'Project 2',
    description: 'This project demonstrates a full-stack application using Node.js and MongoDB.',
    technologies: ['Node.js', 'MongoDB', 'Express.js'],
    link: '/project-2',
  },
  {
    title: 'Project 3',
    description: 'A machine learning model built with Python and TensorFlow to predict housing prices.',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    link: '/project-3',
  },
  
];

const Portfolio = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 transition-all duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
