'use client'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: "Student Organization Web App",
      description: "School management system with student search, exam center, marks grading, and PDF admit card generation capabilities.",
      image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
      technologies: ["HTML", "CSS", "Bootstrap", "NodeJS", "ExpressJS", "MySQL"]
    },
    {
      title: "SmartStudy App",
      description: "Learning platform with note creation, resource management, and Razorpay integration for student subscriptions. Full CRUD operations for study materials.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      technologies: ["ReactJS", "Node.js", "Express.js", "MySQL", "MongoDB", "Bootstrap", "Razor Pay", "Mailtrap", "EmailJS", "Linear Regration"]
    },
    {
      title: "Covid-19 Data Analysis",
      description: "Worldwide COVID-19 data analysis using advanced data science tools and visualization techniques.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Tableau"]
    },
    {
      title: "Dev Community",
      description: "A full-stack Developer community web app where all developers can share their thoughts, daily life, and opportunities type of social media CRUD, search, and admin functionality.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "NodeJS", "MongoDB"]
    },
     {
      title: "Plan Tracker",
      description: "Create, update, delete the daily task plan also show dashboard where can see total today tasks, completed, inprogress, and todo task also have task progress score.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      technologies: ["NextJS", "Tailwind CSS", "Laravel", "MySQL"]
    }

  ];

  return (
    <div className="min-h-screen py-20" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl overflow-hidden border border-cyan-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
