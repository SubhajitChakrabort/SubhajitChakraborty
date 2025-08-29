"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md animate-pulse"></div>
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 z-10">
            <Image
              src="/image.jpg"
              alt="Subhajit Chakraborty"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Name with Glow Effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white relative">
          <span className="absolute inset-0 animate-pulse blur-xl bg-cyan-400 opacity-20"></span>
          Subhajit Chakraborty
        </h1>

        {/* Titles */}
        <div className="space-y-2 text-xl md:text-2xl mb-6">
          <p className="text-white font-semibold">{"{Software Engineer}"}</p>
          <div className="relative inline-block">
            <p className="text-gray-300">{"{Full Stack Web Developer}"}</p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
          </div>
        </div>

        {/* Tech Stack Description */}
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto px-4">
          Passionate MERN Stack Development | MongoDB • Express.js • React.js •
          Node.js | MySQL • RESTful APIs
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/SubhajitChakrabort"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white rounded-full hover:border-cyan-400 transition-colors group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/subhajit-chakraborty-774904235"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white rounded-full hover:border-cyan-400 transition-colors group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/subhajit_8703_official?igsh=bWJkbHF2cXJla3J0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white rounded-full hover:border-cyan-400 transition-colors group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/subhajit.chakraborty.129142?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white rounded-full hover:border-cyan-400 transition-colors group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
        {/* Animated Rocket */}
        <div className="animate-bounce mt-8">
          <svg
            className="w-16 h-16 mx-auto text-cyan-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L7.88 14.12L5.36 11.6L4.22 11.19C4.22 11.19 3.82 11.06 3.3 11.61C2.78 12.16 3 12.53 3 12.53L3.14 13.84L5.45 16.15L5.84 17.42L7.88 19.46L7.88 19.46L8.31 21.18C8.31 21.18 8.68 21.4 9.23 20.88C9.78 20.36 9.65 19.96 9.65 19.96L9.24 18.82L6.24 22Z" />
          </svg>
          <div className="w-1 h-12 mx-auto mt-2">
            <div className="h-full w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
