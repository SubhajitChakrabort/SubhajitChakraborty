'use client'
import Image from 'next/image'

const Achievements = () => {
  const achievements = [
    {
      year: "2023-2024",
      title: "100% Academic Attendance Winner",
      description: "Maintained perfect attendance throughout the academic year, demonstrating exceptional commitment to learning and professional development.",
    },
    {
      year: "2022-2023",
      title: "100% Academic Attendance Winner",
      description: "Achieved perfect attendance record for the entire academic year, showcasing dedication and consistent engagement in academic pursuits.",
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20" id="achievements">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md -m-2"></div>
            <div className="relative h-full w-full">
              <Image
                src="/image2.jpg"
                alt="Academic Achievement"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Academic Achievements
              </span>
            </h2>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-500/20 backdrop-blur-sm"
                >
                  <div className="text-cyan-400 font-semibold mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
