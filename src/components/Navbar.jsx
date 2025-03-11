import React from 'react';
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
  return (
    <nav className="fixed top-4 inset-x-4 mx-auto rounded-lg z-50 
                   backdrop-blur-lg bg-gray-900/30 border border-gray-700/30
                   shadow-lg shadow-black/30 hover:shadow-xl transition-shadow duration-300
                   max-w-3xl min-w-[500px] w-fit"> {/* Aumentado a max-w-3xl y min-w-[500px] */}
      <div className="mx-auto px-6 py-6 flex justify-center items-center"> {/* Aumentado padding horizontal a px-6 */}
        <ul className="flex justify-center space-x-8"> {/* Aumentado espacio entre elementos a space-x-8 */}
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