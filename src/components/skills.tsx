const Skills = () => {
  const topSkills = [
    { name: 'React.js', percentage: 90 },
    { name: 'Next.js', percentage: 85 },
    { name: 'JavaScript', percentage: 95 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Python', percentage: 90 },
  ];

  const otherSkills = [
    { name: 'C++', percentage: 75 },
    { name: 'KiCad', percentage: 70 },
    
  ];

  const circleRadius = 50; // radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius; // calculate circumference

  const renderCircle = (percentage: number) => {
    const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference;
    return strokeDashoffset;
  };

  return (
    <div className="mt-16 px-4">
      <h2 className="text-3xl font-bold text-center text-white">My Skills</h2>

      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {/* Top Skills */}
        {topSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <h4 className="text-white text-lg mb-4">{skill.name}</h4>
            <div className="relative flex items-center justify-center">
              <svg
                className="rotate-90"
                width={circleRadius * 2 + 16} 
                height={circleRadius * 2 + 16} 
                viewBox={`0 0 ${circleRadius * 2 + 16} ${circleRadius * 2 + 16}`} 
              >
                <circle
                  cx={circleRadius + 8} 
                  cy={circleRadius + 8} 
                  r={circleRadius}
                  fill="none"
                  stroke="#ddd"
                  strokeWidth="8"
                />
                <circle
                  cx={circleRadius + 8} 
                  cy={circleRadius + 8} 
                  r={circleRadius}
                  fill="none"
                  stroke={skill.percentage >= 80 ? '#4CAF50' : '#FF9800'}
                  strokeWidth="8"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={renderCircle(skill.percentage)}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="absolute text-xl font-semibold text-white">
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}

        {/* Other Skills */}
        {otherSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <h4 className="text-white text-lg mb-4">{skill.name}</h4>
            <div className="relative flex items-center justify-center">
              <svg
                className="rotate-90"
                width={circleRadius * 2 + 16} 
                height={circleRadius * 2 + 16} 
                viewBox={`0 0 ${circleRadius * 2 + 16} ${circleRadius * 2 + 16}`} 
              >
                <circle
                  cx={circleRadius + 8} 
                  cy={circleRadius + 8} 
                  r={circleRadius}
                  fill="none"
                  stroke="#ddd"
                  strokeWidth="8"
                />
                <circle
                  cx={circleRadius + 8} 
                  cy={circleRadius + 8} 
                  r={circleRadius}
                  fill="none"
                  stroke={skill.percentage >= 80 ? '#4CAF50' : '#FF9800'}
                  strokeWidth="8"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={renderCircle(skill.percentage)}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="absolute text-xl font-semibold text-white">
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
