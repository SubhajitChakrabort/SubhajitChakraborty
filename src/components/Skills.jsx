'use client'

const Skills = () => {
  const technologies = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
    },
    
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
    },
    {
      name: "Matplotlib",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png"
    },
    {
      name: "PowerBI",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png"
    },
    
    {
      name: "Tableau",
      icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
    },
    {
      name: "JIRA",
      icon: "https://logos-world.net/wp-content/uploads/2021/02/Jira-Logo.png"
      
    },
    
    
    // {
    //   name: "Agile",
    //   icon: "https://images.unsplash.com/photo-1582883693742-5d25fbef2c85?q=80&w=1000&auto=format&fit=crop"
    // },
    
    {
      name: "Scrum",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Scrum_process.svg/1280px-Scrum_process.svg.png"
    },
    
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
    }
  ];

  return (
    <div className="min-h-screen py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-white text-center">{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/SubhajitChakraborty.pdf"
            download
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white border-2 border-cyan-400 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute left-0 w-full h-0 transition-all bg-gradient-to-r from-cyan-500 to-blue-500 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
            <span className="relative flex items-center gap-2">
              Download CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
      
  );
};

export default Skills;
