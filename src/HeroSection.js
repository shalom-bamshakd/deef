import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1974&auto=format&fit=crop"
          alt="Deaf developers collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/60" aria-hidden="true"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">Empowering Deaf Developers</h1>
        <p className="text-xl mb-8">Yes, You Can Code!</p>
        <a href="/form">
          <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg shadow hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </a>
      
      </div>
    </section>
  );
};

export default HeroSection;
