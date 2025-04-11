import React, { useState } from 'react';
import { toast } from 'sonner';

const CommunitySection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    // Simulate sending to backend
    setTimeout(() => {
      toast.success("Thank you for joining our community! We'll be in touch soon.");
      setSubmitted(true);
      setEmail('');
      setLoading(false);
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
            <a href="#" className="text-white hover:text-purple-300" aria-label="Twitter">
              {/* Twitter Icon */}
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-purple-300" aria-label="GitHub">
              {/* GitHub Icon */}
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-purple-300" aria-label="LinkedIn">
              {/* LinkedIn Icon */}
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
