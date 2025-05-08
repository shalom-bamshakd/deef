import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

const CommunitySection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const isValidEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate sending to backend (e.g., API call)
    setTimeout(() => {
      toast.success("Thank you for joining our community! We'll be in touch soon.");
      setSubmitted(true);
      setEmail('');
      setLoading(false);

      // Redirect to the tutorials page after successful sign up
      navigate("/tutorials");
    }, 1000);
  };

  return (
    <section className="py-16 bg-purple-900 text-white" id="community">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Join Our Community</h2>

        <p className="text-xl text-center mb-10 max-w-3xl mx-auto">
          Connect with other deaf developers, access exclusive resources, and grow your career in tech.
          Our community offers mentorship, job opportunities, and a supportive network.
        </p>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up for Updates</h3>

          {submitted ? (
            <p className="text-center text-green-300 font-medium">
              You're in! 🎉 We'll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/20 border-purple-400 text-white placeholder-purple-200"
                  aria-label="Your email address"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Join Now'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p>Already a member? <a href="#resources" className="text-purple-300 hover:text-purple-100 underline">Access resources</a></p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-4">Follow us on social media:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" className="text-white text-3xl hover:text-purple-300" aria-label="Twitter">
              {/* Twitter Icon */}
              <CiTwitter />
            </a>
            <a href="https://facebook.com" className="text-white text-3xl hover:text-purple-300" aria-label="GitHub">
              {/* FaceBook Icon */}
              <FaFacebookMessenger />
            </a>
            <a href="https://linkedin.com" className="text-white text-3xl hover:text-purple-300" aria-label="LinkedIn">
              {/* LinkedIn Icon */}
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;