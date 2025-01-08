import Projects from '../components/projects';
import Skills from '@/components/skills';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-5xl font-bold text-gray-300 mb-10">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Hi, I'm <strong>Jasper</strong>, a Computer Engineer with experience in building innovative solutions using modern technologies. I specialize in web development, building scalable and user-friendly applications that solve real-world problems.
      </p>
      <div className="mt-8">
        <p className="text-l font-semibold text-gray-300">Explore My Work</p>
        <p className="text-lg text-gray-600 mt-2">
          Browse through my projects to see how I can help bring your ideas to life.
        </p>
      </div>

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Explore Arrow */}
      <div className="mt-12">
        <Link href="/portfolio" className="inline-block mt-4 text-xl text-blue-400 hover:text-blue-600 transition-all duration-300">
          <span className="mr-2">Go to Portfolio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-6 w-6 transform transition-transform duration-300 hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;
