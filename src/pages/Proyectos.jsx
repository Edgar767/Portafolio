import React from 'react';
import CardModal from '../components/Cards/CardModal';
import Robotools from '../assets/images/robotools.png';
import FLStudio from '../assets/images/fl.png';
import React_Logo from '../assets/Logos/react_logo.svg';
import Tailwind_Logo from '../assets/Logos/tailwindcss_logo.svg';
import Framer_Logo from '../assets/Logos/framer_logo.svg';
import Vitejs_Logo from '../assets/Logos/vitejs_logo.svg';
import Daisyui_Logo from '../assets/Logos/daisyui_logo.svg';
import Javascript_Logo from '../assets/Logos/javascript_logo.svg';
import CSS_Logo from '../assets/Logos/css_logo.svg';

const Proyectos = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[60vh] flex items-center justify-center bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-Goldman text-white mb-6 leading-tight">
          Proyectos
        </h1>

        <CardModal
          imagenes={[
            { url: FLStudio, alt: "Vista principal del proyecto" },
            { url: Robotools, alt: "Detalle de la interfaz" },
            { url: FLStudio, alt: "Vista móvil" },
            { url: FLStudio, alt: "Vista principal del proyecto" },
            { url: Robotools, alt: "Detalle de la interfaz" },
          ]}

          titulo="Robotools"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          githubUrl={"https://github.com/Edgar767/RoboTools"}
          externalUrl={"https://robotools-fawn.vercel.app/inicio"}
          
          tecnologias={[
            { nombre: "Vite JS", logo: Vitejs_Logo },
            { nombre: "React", logo: React_Logo },
            { nombre: "Daisy UI", logo: Daisyui_Logo },
            { nombre: "Tailwind CSS", logo: Tailwind_Logo },
            { nombre: "Framer Motion", logo: Framer_Logo }
          ]}
        />

      </div>
    </section>
  );
};

export default Proyectos;