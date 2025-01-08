const About = () => (
  <div className="text-center py-16 px-4">
    <h1 className="text-5xl font-bold text-gray-300 mb-8">About Me</h1>
    <p className="text-lg text-gray-300 mb-6">
      Hi, I'm <strong>Afeawo Sandy Jasper</strong>, a passionate Computer Engineer who graduated from the Kwame Nkrumah University of Science and Technology (KNUST) in 2024. I specialize in solving real-world problems through technology and am particularly focused on web development, system design, and engineering solutions.
    </p>
    
    <p className="text-lg text-gray-300 mb-6">
      During my time at KNUST, I developed a deep understanding of both hardware and software. I have honed my skills in building scalable and efficient systems, ensuring seamless integration between hardware components and software frameworks. My academic journey has shaped my problem-solving abilities and driven my passion for innovation.
    </p>

    <h2 className="text-3xl font-semibold text-gray-300 mt-12 mb-4">Skills</h2>

    <div className="space-y-6">
      {/* React and Next.js */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">React.js & Next.js</h3>
        <p className="text-gray-300 mt-2">
          I am proficient in using React.js and Next.js to build dynamic and high-performance web applications. These technologies allow me to create user interfaces that are both interactive and responsive. With Next.js, I leverage server-side rendering (SSR) and static site generation (SSG) to improve performance and SEO.
        </p>
      </div>

      {/* JavaScript and TypeScript */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">JavaScript & TypeScript</h3>
        <p className="text-gray-300 mt-2">
          I have a strong foundation in JavaScript, enabling me to develop complex applications with ease. TypeScript is my preferred language for its ability to add type safety, improving code quality and maintainability. I enjoy working on both front-end and back-end development using these languages.
        </p>
      </div>

      {/* Node.js */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">Node.js</h3>
        <p className="text-gray-300 mt-2">
          With Node.js, I am able to build scalable and efficient back-end systems. I have worked on building RESTful APIs and integrated various services using Node.js. The ability to write both client-side and server-side code in JavaScript has helped me deliver full-stack solutions.
        </p>
      </div>

      {/* Python */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">Python</h3>
        <p className="text-gray-300 mt-2">
          Python is my go-to language for automation, data analysis, and machine learning projects. I have experience with libraries such as Flask for web development and Pandas for data manipulation. Python's versatility allows me to approach projects from different angles and apply it to a wide variety of domains.
        </p>
      </div>

      {/* C++ */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">C++</h3>
        <p className="text-gray-300 mt-2">
          I am also proficient in C++, a language I used extensively during my studies. It helped me understand low-level programming concepts and gave me experience in performance optimization and memory management. I’ve used C++ for system-level programming and for projects requiring high-performance computations.
        </p>
      </div>

      {/* KiCad */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">KiCad</h3>
        <p className="text-gray-300 mt-2">
          KiCad has allowed me to design and develop custom printed circuit boards (PCBs). My experience with KiCad includes designing the schematics, creating PCB layouts, and simulating circuits to ensure their functionality. This skill has been particularly useful in integrating hardware with software solutions.
        </p>
      </div>

      {/* MATLAB */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">MATLAB</h3>
        <p className="text-gray-300 mt-2">
          MATLAB has been a crucial tool for mathematical modeling, simulations, and algorithm development. I have applied it in various projects, including control systems and signal processing, where I used its powerful computational abilities to create and test models and algorithms.
        </p>
      </div>
    </div>
  </div>
);

export default About;
