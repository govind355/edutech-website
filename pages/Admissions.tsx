import React from 'react';
import { Calendar, FileText, CheckSquare, Download } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-royal mb-4">Admissions 2024-25</h1>
            <p className="text-xl text-gray-600">Join a vibrant community of learners. Your journey to excellence starts here.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
             <div className="bg-gold p-6 text-center">
               <h2 className="text-2xl font-bold text-royal">Applications are NOW OPEN!</h2>
               <p className="text-royal font-medium">Deadline: July 31st, 2024</p>
             </div>
             
             <div className="p-8 md:p-12">
               <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Eligibility Criteria</h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start">
                   <CheckSquare className="text-maroon mr-3 mt-1" />
                   <span className="text-gray-700"><strong>Undergraduate:</strong> Minimum 60% aggregate in 10+2 from a recognized board.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckSquare className="text-maroon mr-3 mt-1" />
                   <span className="text-gray-700"><strong>Postgraduate:</strong> Bachelor's degree in relevant field with minimum 55%.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckSquare className="text-maroon mr-3 mt-1" />
                   <span className="text-gray-700"><strong>Diploma:</strong> 10+2 or equivalent (Stream specific requirements apply).</span>
                 </li>
               </ul>

               <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Documents Required</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                 {['10th & 12th Marksheets', 'Transfer Certificate', 'Character Certificate', 'Migration Certificate', 'Passport Size Photographs', 'Aadhar Card Copy'].map((doc, i) => (
                   <div key={i} className="flex items-center bg-gray-50 p-3 rounded">
                     <FileText size={18} className="text-royal mr-2" />
                     <span className="text-gray-700 text-sm">{doc}</span>
                   </div>
                 ))}
               </div>

               <div className="bg-blue-50 border-l-4 border-royal p-6 mb-8">
                 <h4 className="font-bold text-royal mb-2 flex items-center"><Calendar className="mr-2" size={20}/> Important Dates</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                   <div>
                     <span className="block text-gray-500">Application Start</span>
                     <span className="font-bold text-gray-800">May 1, 2024</span>
                   </div>
                   <div>
                     <span className="block text-gray-500">Entrance Test</span>
                     <span className="font-bold text-gray-800">August 10, 2024</span>
                   </div>
                 </div>
               </div>

               <div className="text-center">
                 <button className="bg-maroon hover:bg-red-900 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105 mb-4 w-full md:w-auto">
                   Apply Online Now
                 </button>
                 <div className="mt-4">
                   <a href="#" className="text-royal font-medium hover:underline flex items-center justify-center">
                     <Download size={18} className="mr-2" /> Download Prospectus
                   </a>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
