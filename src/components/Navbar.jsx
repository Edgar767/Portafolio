import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 inset-x-4 mx-auto rounded-lg z-50 
                   backdrop-blur-lg bg-gray-900/30 border border-gray-700/30
                   shadow-lg shadow-black/30 hover:shadow-xl transition-shadow duration-300
                   max-w-2xl min-w-[400px] w-fit">
      <div className="mx-auto px-8 py-5 flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <a 
              href="#home" 
              className="inline-block text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 hover:after:w-full hover:after:bg-white">
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="inline-block text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 hover:after:w-full hover:after:bg-white">
              Acerca
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="inline-block text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 hover:after:w-full hover:after:bg-white">
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="inline-block text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 hover:after:w-full hover:after:bg-white">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;