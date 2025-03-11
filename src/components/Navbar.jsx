import React, { useState, useRef } from 'react';
import { 
  HomeIcon as HomeOutline,
  UserIcon as UserOutline,
  FolderIcon as FolderOutline,
  ChatBubbleBottomCenterTextIcon as ChatOutline
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeSolid,
  UserIcon as UserSolid,
  FolderIcon as FolderSolid,
  ChatBubbleBottomCenterTextIcon as ChatSolid
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    
    // Detectar proximidad (80px alrededor de la navbar)
    const buffer = 80;
    const isNear = 
      e.clientX > rect.left - buffer &&
      e.clientX < rect.right + buffer &&
      e.clientY > rect.top - buffer &&
      e.clientY < rect.bottom + buffer;
    
    setIsHovered(isNear);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-4 inset-x-4 mx-auto rounded-lg z-50 
                backdrop-blur-lg bg-gray-900/30 border border-gray-700/30
                shadow-lg shadow-black/30 hover:shadow-xl
                max-w-3xl min-w-[500px] w-fit overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 
                    bg-indigo-500/20 rounded-full blur-xl transition-opacity duration-300"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>

      <div className="relative mx-auto px-6 py-6 flex justify-center items-center">
        <ul className="flex justify-center space-x-8">
          <li>
            <a 
              href="#home" 
              className="group inline-flex items-center text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 after:-translate-x-1/2
                         hover:after:w-full hover:after:bg-white space-x-2">
              <div className="relative h-[1em] w-[1em]">
                <HomeOutline className="absolute inset-0 h-full w-full opacity-100 group-hover:opacity-0 transition-opacity" />
                <HomeSolid className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="group inline-flex items-center text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 after:-translate-x-1/2
                         hover:after:w-full hover:after:bg-white space-x-2">
              <div className="relative h-[1em] w-[1em]">
                <UserOutline className="absolute inset-0 h-full w-full opacity-100 group-hover:opacity-0 transition-opacity" />
                <UserSolid className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span>Acerca</span>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="group inline-flex items-center text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 after:-translate-x-1/2
                         hover:after:w-full hover:after:bg-white space-x-2">
              <div className="relative h-[1em] w-[1em]">
                <FolderOutline className="absolute inset-0 h-full w-full opacity-100 group-hover:opacity-0 transition-opacity" />
                <FolderSolid className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span>Proyectos</span>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="group inline-flex items-center text-gray-300 transition-all duration-300 
                         hover:text-white hover:scale-105 hover:font-bold relative
                         after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                         after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                         after:duration-300 after:-translate-x-1/2
                         hover:after:w-full hover:after:bg-white space-x-2">
              <div className="relative h-[1em] w-[1em]">
                <ChatOutline className="absolute inset-0 h-full w-full opacity-100 group-hover:opacity-0 transition-opacity" />
                <ChatSolid className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span>Contacto</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;