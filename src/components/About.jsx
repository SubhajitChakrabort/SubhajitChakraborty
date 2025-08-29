'use client'
import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md -m-2"></div>
            <div className="relative h-full w-full">
              <Image
                src="/image1.jpg"
                alt="Subhajit Chakraborty"
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
                About Me
              </span>
            </h2>
            
            <div className="text-gray-300 text-lg space-y-4">
              <p className="leading-relaxed">
                BCA graduate with expertise in web development technologies 
                (<span className="text-cyan-400">NextJS, ReactJS, React Native</span>), 
                backend technologies (<span className="text-cyan-400">Node.js, Express.js, Laravel</span>) 
                and database management (<span className="text-cyan-400">MySQL, MongoDB</span>).
              </p>

              {/* Experience and Projects Boxes */}
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                {/* Experience Box */}
                <div className="flex-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-500/20 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">1.5+</h3>
                      <p className="text-gray-400">Years Experience</p>
                    </div>
                  </div>
                </div>

                {/* Projects Box */}
                <div className="flex-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-500/20 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l3 3 5-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">20+</h3>
                      <p className="text-gray-400">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
