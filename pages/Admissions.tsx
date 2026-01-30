import React, { useState } from 'react';
import { Calendar, FileText, CheckSquare, Download, Send, User, Book, Home } from 'lucide-react';

const Admissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'apply'>('info');

  return (
    <div className="pt-8 pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-royal text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-serif font-bold text-gold mb-4">Admissions 2024-25</h1>
           <p className="text-xl max-w-2xl mx-auto text-gray-200">Start your journey towards excellence. Apply now for the upcoming academic session.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md p-1 inline-flex">
            <button 
              onClick={() => setActiveTab('info')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'info' ? 'bg-royal text-gold shadow-sm' : 'text-gray-600 hover:text-royal'}`}
            >
              Admission Info
            </button>
            <button 
              onClick={() => setActiveTab('apply')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'apply' ? 'bg-royal text-gold shadow-sm' : 'text-gray-600 hover:text-royal'}`}
            >
              Online Application Form
            </button>
          </div>
        </div>

        {activeTab === 'info' ? (
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
               <div className="bg-gold/10 p-6 text-center border-b border-gold/20">
                 <h2 className="text-2xl font-bold text-royal">Applications are NOW OPEN!</h2>
                 <p className="text-royal/80 font-medium">Deadline: July 31st, 2024</p>
               </div>
               
               <div className="p-8 md:p-12">
                 <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Eligibility Criteria</h3>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-start">
                     <div className="bg-maroon/10 p-1 rounded mr-3 mt-1"><CheckSquare className="text-maroon" size={16} /></div>
                     <span className="text-gray-700"><strong>Undergraduate:</strong> Minimum 60% aggregate in 10+2 from a recognized board.</span>
                   </li>
                   <li className="flex items-start">
                     <div className="bg-maroon/10 p-1 rounded mr-3 mt-1"><CheckSquare className="text-maroon" size={16} /></div>
                     <span className="text-gray-700"><strong>Postgraduate:</strong> Bachelor's degree in relevant field with minimum 55%.</span>
                   </li>
                   <li className="flex items-start">
                     <div className="bg-maroon/10 p-1 rounded mr-3 mt-1"><CheckSquare className="text-maroon" size={16} /></div>
                     <span className="text-gray-700"><strong>Diploma:</strong> 10+2 or equivalent (Stream specific requirements apply).</span>
                   </li>
                 </ul>

                 <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Documents Required</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                   {['10th & 12th Marksheets', 'Transfer Certificate', 'Character Certificate', 'Migration Certificate', 'Passport Size Photographs', 'Aadhar Card Copy'].map((doc, i) => (
                     <div key={i} className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                       <FileText size={18} className="text-royal mr-3" />
                       <span className="text-gray-700 text-sm font-medium">{doc}</span>
                     </div>
                   ))}
                 </div>

                 <div className="bg-blue-50 border-l-4 border-royal p-6 mb-8 rounded-r-lg">
                   <h4 className="font-bold text-royal mb-4 flex items-center"><Calendar className="mr-2" size={20}/> Important Dates</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                     <div>
                       <span className="block text-gray-500 uppercase text-xs tracking-wider">Application Start</span>
                       <span className="font-bold text-gray-800 text-lg">May 1, 2024</span>
                     </div>
                     <div>
                       <span className="block text-gray-500 uppercase text-xs tracking-wider">Entrance Test</span>
                       <span className="font-bold text-gray-800 text-lg">August 10, 2024</span>
                     </div>
                   </div>
                 </div>

                 <div className="text-center">
                   <button onClick={() => setActiveTab('apply')} className="bg-maroon hover:bg-red-900 text-white text-lg font-bold px-12 py-4 rounded-full shadow-lg transition-transform hover:scale-105 mb-4 w-full md:w-auto">
                     Apply Online Now
                   </button>
                   <div className="mt-4">
                     <a href="#" className="text-royal font-medium hover:underline flex items-center justify-center">
                       <Download size={18} className="mr-2" /> Download Prospectus PDF
                     </a>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-gold">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold text-royal mb-2">Registration Form</h2>
                <p className="text-gray-500 mb-8">Please fill in all details accurately. Fields marked with * are mandatory.</p>
                
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted Successfully!"); }}>
                  
                  {/* Personal Details */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 border-b pb-2">
                       <User className="text-gold" />
                       <h3 className="text-xl font-bold text-gray-800">Personal Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth *</label>
                        <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Gender *</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 border-b pb-2">
                       <Book className="text-gold" />
                       <h3 className="text-xl font-bold text-gray-800">Academic Preference</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Program Applying For *</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required>
                          <option value="">Select Program</option>
                          <option>B.Sc. Computer Science</option>
                          <option>B.Com Honors</option>
                          <option>BA History & Culture</option>
                          <option>Diploma in Digital Marketing</option>
                        </select>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Last Qualification Percentage *</label>
                         <input type="number" placeholder="e.g. 85.5" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Passing Year *</label>
                         <input type="number" placeholder="e.g. 2023" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                    </div>
                  </div>

                   {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 border-b pb-2">
                       <Home className="text-gold" />
                       <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                        <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Permanent Address *</label>
                        <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-gray-50" required></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-royal hover:bg-blue-900 text-white font-bold text-lg py-4 rounded shadow-lg transition-colors flex items-center justify-center">
                      <Send className="mr-2" /> Submit Application
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">By clicking submit, you agree to our terms and conditions.</p>
                  </div>

                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admissions;