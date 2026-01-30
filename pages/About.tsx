import React from 'react';
import { Target, Heart, Award } from 'lucide-react';
import { INSTITUTE_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-royal py-16 text-center text-white mb-12 relative overflow-hidden">
         <img src="https://picsum.photos/seed/jaipur1/1920/400" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Background" />
         <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">About Us</h1>
           <p className="text-xl max-w-2xl mx-auto">Discover the legacy of excellence and tradition.</p>
         </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-royal mb-6">Our History & Heritage</h2>
            <p className="text-gray-700 leading-loose mb-4">
              Established in 1995, {INSTITUTE_NAME} was founded with a vision to merge the rich cultural heritage of Jaipur with modern educational standards. Located in the vibrant heart of the Pink City, our campus reflects a blend of traditional architecture and contemporary facilities.
            </p>
            <p className="text-gray-700 leading-loose">
              Over the decades, we have grown from a small college to a premier institution, recognized for producing leaders in Science, Commerce, and Arts. Our alumni network spans the globe, yet they remain rooted in the values instilled here.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/history/800/600" alt="History" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-royal text-center hover:-translate-y-2 transition-transform">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-royal w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">To provide accessible, high-quality education that empowers students with knowledge, skills, and values to succeed in a dynamic world.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-maroon text-center hover:-translate-y-2 transition-transform">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-maroon w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
            <p className="text-gray-600">We prioritize Integrity, Innovation, Inclusivity, and Respect for Tradition in every aspect of our academic environment.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold text-center hover:-translate-y-2 transition-transform">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">To be a globally recognized centre of excellence where tradition inspires innovation and students become global citizens.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
