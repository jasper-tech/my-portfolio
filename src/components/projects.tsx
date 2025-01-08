import Link from 'next/link';

const Projects = () => {
  const projectList = [
    {
      title: 'Title',
      description: 'A description of Project One, showcasing my web development skills.',
      link: '/portfolio/project-one',
    },
    {
      title: 'Title',
      description: 'A description of Project Two, focused on solving a real-world problem.',
      link: '/portfolio/project-two',
    },
    {
      title: 'Title',
      description: 'A description of Project Three, emphasizing user-friendly design.',
      link: '/portfolio/project-three',
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="bg-gray-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <p className="mt-4 text-gray-300">{project.description}</p>
          <Link href={project.link} className="mt-4 inline-block text-blue-500 hover:text-blue-700">
            View Project 
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
