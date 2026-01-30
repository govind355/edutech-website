import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Users, BookOpen, Trophy, ChevronLeft, ArrowRight } from 'lucide-react';
import { COURSES, FACULTY, EVENTS, INSTITUTE_NAME, GALLERY_IMAGES } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [facultyIndex, setFacultyIndex] = useState(0);
  const facultyScrollRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      image: 'https://picsum.photos/seed/jaipur1/1920/1080',
      title: "Where Tradition Meets Excellence",
      subtitle: "Empowering Students for a Brighter Future",
      cta: "Join Our Community"
    },
    {
      image: 'https://picsum.photos/seed/students/1920/1080',
      title: "Shaping Tomorrow's Leaders",
      subtitle: "Innovation, Integrity, and Cultural Values",
      cta: "Explore Courses"
    },
    {
      image: 'https://picsum.photos/seed/library/1920/1080',
      title: "World-Class Facilities",
      subtitle: "A State-of-the-Art Environment for Learning",
      cta: "View Facilities"
    }
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Faculty Carousel logic
  const scrollFaculty = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setFacultyIndex(prev => Math.max(0, prev - 1));
    } else {
      setFacultyIndex(prev => Math.min(FACULTY.length - 1, prev + 1));
    }
  };

  useEffect(() => {
    if (facultyScrollRef.current) {
      const cardWidth = 300; // approx width + gap
      facultyScrollRef.current.scrollTo({
        left: facultyIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [facultyIndex]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Animated Hero Section */}
      <section className="relative h-[600px] md:h-[750px] overflow-hidden bg-gray-900">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Image with Zoom Animation */}
            <div className={`absolute inset-0 ${index === currentSlide ? 'animate-zoom-slow' : ''}`}>
               <img src={slide.image} alt="Hero" className="w-full h-full object-cover opacity-50" />
            </div>
            
            {/* Text Content - Re-animates on key change */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              {index === currentSlide && (
                <div className="max-w-4xl">
                  <h2 className="text-gold text-lg md:text-2xl font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in-down drop-shadow-lg">
                    Welcome to {INSTITUTE_NAME}
                  </h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    {slide.title}
                  </h1>
                  <p className="text-gray-100 text-lg md:text-2xl max-w-2xl mx-auto mb-10 drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <Link to="/admissions" className="bg-maroon hover:bg-red-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl border-2 border-maroon hover:border-gold flex items-center justify-center">
                      {slide.cta} <ChevronRight className="ml-2" />
                    </Link>
                    <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                      Discover More
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-30">
          {heroSlides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gold w-12' : 'bg-white/50 w-6 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Actions Bar - Floating Overlap */}
      <div className="relative z-30 -mt-16 container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-100 border-b-4 border-gold">
          <Link to="/admissions" className="flex flex-col items-center text-center p-2 hover:bg-gray-50 transition-colors rounded group">
            <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-royal transition-colors">
              <BookOpen className="text-royal group-hover:text-gold" size={24} />
            </div>
            <span className="text-royal font-bold text-lg">Admissions</span>
            <span className="text-xs text-gray-500 mt-1">Join the family</span>
          </Link>
          <Link to="/courses" className="flex flex-col items-center text-center p-2 hover:bg-gray-50 transition-colors rounded group">
             <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-royal transition-colors">
              <Trophy className="text-royal group-hover:text-gold" size={24} />
            </div>
            <span className="text-royal font-bold text-lg">Programs</span>
            <span className="text-xs text-gray-500 mt-1">Explore academics</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-center p-2 hover:bg-gray-50 transition-colors rounded group">
             <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-royal transition-colors">
              <Users className="text-royal group-hover:text-gold" size={24} />
            </div>
            <span className="text-royal font-bold text-lg">Student Life</span>
             <span className="text-xs text-gray-500 mt-1">Campus vibes</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-center p-2 hover:bg-gray-50 transition-colors rounded group">
             <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:bg-royal transition-colors">
              <Calendar className="text-royal group-hover:text-gold" size={24} />
            </div>
            <span className="text-royal font-bold text-lg">Events</span>
             <span className="text-xs text-gray-500 mt-1">What's happening</span>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block border-b-4 border-maroon mb-4">
              <h3 className="text-royal font-bold tracking-widest uppercase text-sm">Who We Are</h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              A Legacy of <span className="text-maroon">Educational Excellence</span> in Jaipur
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Located in the heart of Jaipur, {INSTITUTE_NAME} is dedicated to providing quality education that fosters innovation, integrity, and cultural values. Our experienced faculty and state-of-the-art facilities create an enriching environment.
            </p>
            <ul className="space-y-4 mb-8">
              {['Holistic Development Approach', 'Cultural Heritage Integration', 'Global Educational Standards'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center bg-royal text-white px-8 py-3 rounded hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl group">
              Read More About Us 
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/30 rounded-full z-0 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-royal/10 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Institute Building" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover transform hover:scale-[1.01] transition-transform duration-500 border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Courses Section - Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <span className="text-maroon font-bold uppercase tracking-wider text-sm">Academics</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal mt-2">Programs Offered</h2>
            </div>
            <Link to="/courses" className="hidden md:flex items-center text-royal font-bold hover:text-gold transition-colors mt-4 md:mt-0">
              View All Courses <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-56 overflow-hidden relative">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">Read Details &rarr;</span>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-4 right-6 bg-gold text-royal text-xs font-bold px-3 py-1 rounded shadow-md uppercase">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-royal transition-colors leading-tight">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs font-medium text-gray-400">
                    <span>{course.duration}</span>
                    <span className="text-maroon">Full Time</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link to="/courses" className="btn-primary inline-block bg-royal text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors font-bold shadow-lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty Carousel Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 transform translate-x-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="text-maroon font-bold uppercase tracking-wider text-sm">Mentors</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal mt-2">Distinguished Faculty</h2>
            </div>
            <div className="flex space-x-2 mt-6 md:mt-0">
              <button 
                onClick={() => scrollFaculty('left')}
                className="p-3 rounded-full border border-gray-200 hover:bg-royal hover:text-white transition-all hover:shadow-lg disabled:opacity-50"
                disabled={facultyIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollFaculty('right')}
                className="p-3 rounded-full border border-gray-200 hover:bg-royal hover:text-white transition-all hover:shadow-lg disabled:opacity-50"
                disabled={facultyIndex >= FACULTY.length - 1} // Simplified disabling logic
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory" ref={facultyScrollRef} style={{ scrollBehavior: 'smooth' }}>
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {FACULTY.map((f) => (
                <div key={f.id} className="w-[300px] md:w-[320px] snap-center bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="h-64 overflow-hidden bg-gray-100">
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-royal mb-1">{f.name}</h3>
                    <p className="text-gold font-bold text-xs uppercase tracking-wide mb-3">{f.role}</p>
                    <p className="text-gray-500 text-sm italic line-clamp-2">"{f.bio}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-royal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-4">Life at Campus</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Experience the vibrant atmosphere, cultural richness, and academic spirit of our institute.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((src, idx) => (
              <div key={idx} className="break-inside-avoid rounded-lg overflow-hidden relative group">
                <img src={src} alt={`Gallery ${idx}`} className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">View</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link to="/contact" className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-royal px-10 py-3 rounded-full font-bold transition-colors">
               Visit Our Campus
             </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-maroon font-bold uppercase tracking-wider text-sm">Updates</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal mt-2">Latest Events & News</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-royal font-bold px-3 py-2 rounded-lg text-xs shadow text-center min-w-[60px]">
                    <span className="block text-lg font-black">{event.date.split(' ')[1]}</span>
                    <span className="block uppercase text-[10px]">{event.date.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-royal transition-colors leading-tight">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{event.description}</p>
                  <a href="#" className="text-maroon text-sm font-bold hover:underline flex items-center">Read Full Story <ArrowRight size={14} className="ml-1" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;