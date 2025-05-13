import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, ExternalLink, Download, ChevronRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (position / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">Srikanth Gummiryala</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase() 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-300`}
              >
                {item}
              </button>
            ))}
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <Download size={18} className="mr-1" /> Resume
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600'
                  } py-2 text-left`}
                >
                  {item}
                </button>
              ))}
              <a 
                href="./resume.pdf" 
                download 
                className="flex items-center text-blue-600 py-2"
              >
                <Download size={18} className="mr-1" /> Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-gray-800">Hello, I'm </span>
                  <span className="text-blue-600">Srikanth Gummiryala</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">MERN Stack Developer</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  As a MERN Stack Developer, I specialize in building high-performance, accessible web applications using cutting-edge technologies like MongoDB, Express.js, React.js, and Node.js.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center"
                  >
                    Contact Me <ChevronRight size={20} className="ml-1" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    View Projects
                  </button>
                </div>
                <div className="flex mt-8 space-x-4">
                  <a href="https://github.com/SrikanthGummiryala" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <GitHub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/srikanthgummiryala/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.gummiryalasrikanth369@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 absolute -top-4 -left-4 animate-pulse opacity-20"></div>
                  <div className=" w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                    <img 
                      src="./Sk1.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img 
                  src="./sk.png" 
                  alt="Working" 
                  className="grayscale  hover:scale-105 rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Who I Am</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate MERN Stack Developer with hands-on experience building web applications through projects and internships. I specialize in JavaScript, React, and Node.js, with a strong focus on responsive and user-friendly design.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My journey began during my Computer Science studies, where I developed a keen interest in solving real-world problems with code. Since then, I’ve built several full-stack projects that demonstrate my skills and eagerness to learn.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Outside of coding, I enjoy hiking, reading tech blogs, and contributing to open-source when possible. I’m constantly exploring new technologies and best practices to grow as a modern full-stack developer.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                    <p className="text-gray-600">B.Tech in Computer Science and Engineering</p>
                    <p className="text-gray-500">Vidya Jyothi Institute of Technology</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Location</h4>
                    <p className="text-gray-600">Hyderabad, Telangana, India</p>
                    <p className="text-gray-500">Available for remote work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Skill Category 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Frontend Development</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">HTML/CSS</span>
                      <span className="text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Bootstrap</span>
                      <span className="text-gray-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">JavaScript</span>
                      <span className="text-gray-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">React</span>
                      <span className="text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  
                  
                  
                </ul>
              </div>
              
              {/* Skill Category 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Backend Development</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Node.js</span>
                      <span className="text-gray-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Express</span>
                      <span className="text-gray-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">MongoDB</span>
                      <span className="text-gray-500">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">RESTful API's</span>
                      <span className="text-gray-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">SQL</span>
                      <span className="text-gray-500">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Skill Category 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Tools & Others</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Git</span>
                      <span className="text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Vercel</span>
                      <span className="text-gray-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Netlify</span>
                      <span className="text-gray-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Render</span>
                      <span className="text-gray-500">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://static.vecteezy.com/system/resources/previews/004/604/661/non_2x/concept-of-online-shopping-on-website-and-mobile-application-3d-smartphone-in-form-of-mini-shop-with-shopping-bag-vector.jpg" 
                    alt="Project 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Store Web Application(MERN Stack)</h3>
                  <p className="text-gray-600 mb-4">
                    Built a responsive MERN stack mobile store app with product viewing, user-friendly UI, and seamless frontend-backend integration for smooth performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">HTML5 & CSS3</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">ReactJs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">NodeJs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Express</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://github.com/SrikanthGummiryala/mobileStoreApp.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <GitHub size={18} className="mr-1" /> Code
                    </a>
                    <a href="https://mobile-store-app-ten.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://img.freepik.com/premium-vector/online-delivery-service-by-scooter-shopping-website-mobile-food-order-concept-web-banner_212216-491.jpg" 
                    alt="Project 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Delivery Web App(Frontend)</h3>
                  <p className="text-gray-600 mb-4">
                    Developed a responsive Mobile Delivery Web App using ReactJS with reusable components, optimized performance, and mobile-friendly user interface.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">HTML5</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">CSS3</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">React</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://github.com/SrikanthGummiryala/Mobile_Delivery-App.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <GitHub size={18} className="mr-1" /> Code
                    </a>
                    <a href="https://mobile-delivery-app.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="Project 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Todo List API(Backend)</h3>
                  <p className="text-gray-600 mb-4">
                    Built a RESTful ToDo List API using Node.js, Express.js, and MongoDB with CRUD operations and deployed on Render platform.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">NodeJs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">ExpressJs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Restful API's</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <GitHub size={18} className="mr-1" /> Code
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out to me using the form below or through my social media.
              </p>
            </div>
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Mail className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-medium">Email</h4>
                        <a href="https://www.gummiryalasrikanth369@gmail.com" className="text-blue-600 hover:underline">www.srikanthgummiryala369@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Linkedin className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-medium">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/srikanthgummiryala/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/SrikanthGummiryala</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <GitHub className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-medium">GitHub</h4>
                        <a href="https://github.com/SrikanthGummiryala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/SrikanthGummiryala</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-gray-700 font-medium mb-4">Availability</h4>
                    <p className="text-gray-600 mb-2">
                      I'm currently available for freelance work and full-time opportunities.
                    </p>
                    <p className="text-gray-600">
                      Response time: <span className="text-blue-600 font-medium">Within 24 hours</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">Srikanth Gummiryala</h2>
              <p className="text-gray-400">MERN Stack Developer</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://github.com/SrikanthGummiryala" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GitHub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/srikanthgummiryala/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://www.gummiryalasrikanth369@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
            <div className="text-center md:text-right">
              <div className="flex space-x-4 justify-center md:justify-end mb-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Srikanth Gummiryala. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;