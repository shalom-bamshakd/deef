import React, { useState } from 'react';

const TutorialsPage = () => {
  const [showVideos, setShowVideos] = useState(false);

  const videos = [
    "https://www.youtube.com/embed/hh6_GlCSkiY",
    "https://www.youtube.com/embed/n92chU9IANo",
    "https://www.youtube.com/embed/IBLM2jksl8I",
    "https://www.youtube.com/embed/qz0aGYrrlhU",
    "https://www.youtube.com/embed/SBvmnHTQIPY",
    "https://www.youtube.com/embed/h8K49dD52WA",
    "https://www.youtube.com/embed/0riHps91AzE",
    "https://www.youtube.com/embed/EnM1vTRzOec"
  ];

  return (
    <section id="learn" className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">ASL Coding Tutorials</h2>

      <div className="text-center mb-4">
        <button
          onClick={() => setShowVideos(!showVideos)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-300 transition"
        >
          {showVideos ? 'Hide Tutorials' : 'Show Tutorials'}
        </button>
      </div>

      {showVideos && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((url, index) => (
            <div key={index} className="aspect-video">
              <iframe
                src={url}
                allowFullScreen
                title={`ASL Video ${index + 1}`}
                className="w-full h-full border-2 border-gray-300 rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TutorialsPage;
