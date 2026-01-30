import React from 'react';
import { COURSES } from '../constants';
import { Clock, CheckCircle } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-gray-50">
      <div className="bg-royal py-16 text-center text-white mb-12 relative">
         <div className="container mx-auto px-4">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">Academic Programs</h1>
           <p className="text-xl max-w-2xl mx-auto text-gray-200">Shape your future with our diverse range of undergraduate and diploma courses.</p>
         </div>
      </div>

      <div className="container mx-auto px-4">
        {['Science', 'Commerce', 'Arts', 'Diploma'].map((category) => (
          <div key={category} className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-royal mr-4">{category} Stream</h2>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COURSES.filter(c => c.category === category).map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow">
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center text-sm text-maroon font-medium mb-4">
                        <Clock size={16} className="mr-2" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle size={14} className="text-green-500 mr-2" />
                          <span>Industry Relevant Curriculum</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                           <CheckCircle size={14} className="text-green-500 mr-2" />
                           <span>Expert Faculty Support</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-royal text-white px-6 py-2 rounded self-start hover:bg-blue-800 transition-colors">
                      Course Details
                    </button>
                  </div>
                </div>
              ))}
              {/* Fallback if single item to show grid layout visual */}
              {COURSES.filter(c => c.category === category).length < 2 && (
                 <div className="bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center p-8">
                   <p className="text-gray-500 italic">More programs coming soon...</p>
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
