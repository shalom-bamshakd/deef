import React from 'react';
import s from "../src/images/s.jpg"
import ss from "../src/images/ss.jpg"
import sss from "../src/images/sss.avif"
const successStories = [
  {
    name: 'Amara',
    role: 'Frontend Developer at Google',
    story: 'Despite growing up in a non-tech background, Amara taught herself HTML and CSS. Today, she’s leading UI design at Google!',
    image:s,
  },
  {
    name: 'Leo',
    role: 'Full Stack Developer & Mentor',
    story: 'Leo, who is deaf, built his first app using React. Now, he mentors young developers in the deaf community.',
    image: sss,
  },
  {
    name: 'Zara',
    role: 'AI Researcher',
    story: 'Zara combined her love for sign language and AI to build models that translate signs into text in real-time.',
    image:ss,
  }
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-white" id="success-stories">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-12">Success Stories</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {successStories.map((person, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-slate-300 p-6 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-purple-700">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
              <p className="mt-4 text-gray-700 text-base">{person.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
