import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Users, BookOpen, Trophy } from 'lucide-react';
import { COURSES, FACULTY, EVENTS, INSTITUTE_NAME } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroImages = [
    'https://picsum.photos/seed/jaipur1/1920/800', // Campus
    'https://picsum.photos/seed/students/1920/800', // Students
    'https://picsum.photos/seed/library/1920/800', // Library
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={img} alt="Campus Life" className="w-full h-full object-cover opacity-60" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-gold text-lg md:text-2xl font-bold uppercase tracking-widest mb-2 drop-shadow-md">
              Welcome to {INSTITUTE_NAME}, Jaipur
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-4xl">
              Where Tradition Meets <span className="text-gold">Excellence</span> in Education
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
              Empowering Students for a Brighter Future through innovation, integrity, and cultural values.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/admissions" className="bg-maroon hover:bg-red-900 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-gold">
                Join Our Vibrant Community
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Discover More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-gold w-8' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Actions Bar */}
      <div className="bg-royal py-6 -mt-0 relative z-20 shadow-xl">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/admissions" className="flex flex-col items-center text-center p-4 rounded hover:bg-blue-900 transition-colors group">
            <BookOpen className="text-gold mb-2 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-white font-bold">Admissions</span>
          </Link>
          <Link to="/courses" className="flex flex-col items-center text-center p-4 rounded hover:bg-blue-900 transition-colors group">
            <Trophy className="text-gold mb-2 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-white font-bold">Programs</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-center p-4 rounded hover:bg-blue-900 transition-colors group">
            <Users className="text-gold mb-2 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-white font-bold">Student Life</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-center p-4 rounded hover:bg-blue-900 transition-colors group">
            <Calendar className="text-gold mb-2 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-white font-bold">Events</span>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="inline-block border-b-4 border-maroon mb-4">
              <h3 className="text-royal font-bold tracking-widest uppercase">Who We Are</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              A Legacy of <span className="text-maroon">Educational Excellence</span> in Jaipur
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Jaipur, {INSTITUTE_NAME} is dedicated to providing quality education that fosters innovation, integrity, and cultural values. Our experienced faculty and state-of-the-art facilities create an enriching environment for students to thrive academically and personally.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in a holistic approach to education, balancing rigorous academics with vibrant extracurricular activities, ensuring our students graduate as well-rounded leaders ready for the world.
            </p>
            <Link to="/about" className="inline-flex items-center text-royal font-bold hover:text-maroon transition-colors text-lg group">
              Read More About Us 
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold opacity-20 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-royal opacity-20 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/seed/about/600/400" 
              alt="Institute Building" 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-maroon font-bold uppercase tracking-wider">Academics</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal mt-2">Programs Offered</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-gold uppercase mb-2 tracking-wide">{course.category}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-royal transition-colors">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <Link to="/courses" className="text-maroon font-bold text-sm hover:underline inline-flex items-center">
                    View Details <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn-primary inline-block bg-royal text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors font-bold shadow-lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Parallax Section */}
      <section className="py-20 bg-fixed bg-cover bg-center relative" style={{backgroundImage: 'url("https://picsum.photos/seed/library/1920/600")'}}>
        <div className="absolute inset-0 bg-royal opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">25+</div>
              <div className="text-sm md:text-lg uppercase tracking-wider">Years of Excellence</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50+</div>
              <div className="text-sm md:text-lg uppercase tracking-wider">Courses</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100+</div>
              <div className="text-sm md:text-lg uppercase tracking-wider">Expert Faculty</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5000+</div>
              <div className="text-sm md:text-lg uppercase tracking-wider">Alumni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life & Facilities Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-royal mb-6">Student Life</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At {INSTITUTE_NAME}, learning goes beyond the classroom. Participate in cultural events, sports, clubs, and community service to build leadership skills and lifelong friendships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/dance/300/200" alt="Cultural" className="rounded-lg shadow-md w-full h-32 object-cover" />
                <img src="https://picsum.photos/seed/sport/300/200" alt="Sports" className="rounded-lg shadow-md w-full h-32 object-cover" />
              </div>
              <Link to="/contact" className="mt-6 inline-block text-maroon font-bold border-b-2 border-maroon pb-1 hover:text-royal hover:border-royal transition-colors">
                Explore Activities
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-royal mb-6">World-Class Facilities</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Modern Classrooms', desc: 'Equipped with smart learning technology.' },
                  { title: 'Central Library', desc: 'Thousands of books and digital resources.' },
                  { title: 'Advanced Laboratories', desc: 'Physics, Chemistry, and Computer labs.' },
                  { title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-gold/20 p-2 rounded-full mr-4 mt-1">
                       <div className="w-2 h-2 bg-royal rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-maroon font-bold uppercase tracking-wider">Happenings</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal mt-2">Events & News</h2>
            </div>
            <Link to="/contact" className="hidden md:inline-block text-royal font-bold hover:text-gold transition-colors">View All Events &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-gold text-royal font-bold px-3 py-1 rounded text-xs shadow-md">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-royal transition-colors">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <a href="#" className="text-royal text-sm font-bold hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Carousel Preview */}
      <section className="py-20 bg-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-12">Meet Our Distinguished Faculty</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {FACULTY.map((f) => (
              <div key={f.id} className="w-full sm:w-64 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <img src={f.image} alt={f.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gold object-cover" />
                <h3 className="text-xl font-bold text-white mb-1">{f.name}</h3>
                <p className="text-gold text-sm mb-3 font-medium">{f.role}</p>
                <p className="text-gray-200 text-xs italic">"{f.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
