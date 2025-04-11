import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-800">Our Mission</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?q=80&w=2069&auto=format&fit=crop" 
              alt="Person using sign language while working on a laptop" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Our mission is to break down barriers in the tech industry by creating an inclusive space where deaf 
              developers can learn, grow, and thrive. We believe that everyone deserves equal opportunities to pursue 
              a career in technology, regardless of hearing ability.
            </p>
            
            <p className="text-lg text-gray-700">
              The tech industry benefits greatly from diverse perspectives and experiences. Deaf developers bring unique 
              problem-solving skills, visual thinking, and attention to detail that enriches the entire community. Our platform 
              aims to provide resources, mentorship, and community support to help you start and advance your coding journey.
            </p>
            
            <p className="text-lg text-gray-700 font-medium">
              Together, we're building a more inclusive and accessible tech world for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
