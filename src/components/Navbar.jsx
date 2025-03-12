import React, { useState, useRef } from 'react';
import { 
  HomeIcon as HomeOutline,
  UserIcon as UserOutline,
  FolderIcon as FolderOutline,
  ChatBubbleBottomCenterTextIcon as ChatOutline,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeSolid,
  UserIcon as UserSolid,
  FolderIcon as FolderSolid,
  ChatBubbleBottomCenterTextIcon as ChatSolid
} from '@heroicons/react/24/solid';

const menuItems = [
  { name: 'Inicio', href: '#home', OutlineIcon: HomeOutline, SolidIcon: HomeSolid },
  { name: 'Acerca', href: '#about', OutlineIcon: UserOutline, SolidIcon: UserSolid },
  { name: 'Proyectos', href: '#projects', OutlineIcon: FolderOutline, SolidIcon: FolderSolid },
  { name: 'Contacto', href: '#contact', OutlineIcon: ChatOutline, SolidIcon: ChatSolid },
];

const Navbar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    
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
      className="fixed top-4 left-4 right-4 mx-auto rounded-lg z-50 
                backdrop-blur-lg bg-gray-900/30 border border-gray-600/30
                shadow-lg shadow-black/30 hover:shadow-xl
                max-w-3xl md:min-w-[500px] w-[calc(100%-2rem)] md:w-fit overflow-hidden"
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
        {/* Logo y Botón Hamburguesa para móvil */}
        <div className="md:hidden absolute left-4 flex items-center space-x-4">
          <button
            className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/30 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          <span className="text-white font-bold text-xl tracking-tighter">&lt;/&gt;</span>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex justify-center space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="group inline-flex items-center text-gray-300 transition-all duration-300 
                           hover:text-white hover:scale-105 hover:font-bold relative
                           after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                           after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                           after:duration-300 after:-translate-x-1/2
                           hover:after:w-full hover:after:bg-white space-x-2">
                <div className="relative h-[1em] w-[1em]">
                  <item.OutlineIcon className="absolute inset-0 h-full w-full opacity-100 group-hover:opacity-0 transition-opacity" />
                  <item.SolidIcon className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-600/30 w-full">
          <ul className="flex flex-col items-start py-6 space-y-6 pl-6">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full">
                <a
                  href={item.href}
                  className="group inline-flex items-center text-gray-300 transition-all duration-300 
                             hover:text-white hover:scale-105 hover:font-bold relative
                             after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                             after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all 
                             after:duration-300 after:-translate-x-1/2
                             hover:after:w-full hover:after:bg-white space-x-2 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative h-[1em] w-[1em]">
                    <item.OutlineIcon className="absolute inset-0 h-full w-full opacity-100 group-hover:opacity-0 transition-opacity" />
                    <item.SolidIcon className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-lg">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;