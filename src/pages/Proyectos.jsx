import React from 'react';
import CardxModal from '../components/Cards/CardxModal';
import Robotools from '../assets/images/robotools.png';
import FLStudio from '../assets/images/fl.png';
import React_Logo from '../assets/tecnologias/react_logo.svg';
import Tailwind_Logo from '../assets/tecnologias/tailwindcss_logo.svg';
import Framer_Logo from '../assets/tecnologias/framer_logo.svg';
import Vitejs_Logo from '../assets/tecnologias/vitejs_logo.svg';
import Daisyui_Logo from '../assets/tecnologias/daisyui_logo.svg';
import Javascript_Logo from '../assets/tecnologias/javascript_logo.svg';
import CSS_Logo from '../assets/tecnologias/css_logo.svg';
import NodeJS_Logo from '../assets/tecnologias/nodejs_logo.svg';
import MongoDB_Logo from '../assets/tecnologias/mongodb_logo.svg';

const Proyectos = () => {
  // Datos de proyectos
  const proyectos = [
    // Proyecto 1: Grande (2x2)
    {
      id: 1,
      imagenes: [
        { url: FLStudio, alt: "Vista principal del proyecto" },
        { url: Robotools, alt: "Detalle de la interfaz" },
      ],
      titulo: "Robotools",
      descripcion: "Herramientas avanzadas para automatización de procesos utilizando IA. Integra múltiples APIs para optimizar flujos de trabajo complejos con una interfaz intuitiva y paneles de control personalizables.",
      githubUrl: "https://github.com/Edgar767/RoboTools",
      externalUrl: "https://robotools-fawn.vercel.app/inicio",
      tecnologias: [
        { nombre: "Vite JS", logo: Vitejs_Logo },
        { nombre: "React", logo: React_Logo },
        { nombre: "Daisy UI", logo: Daisyui_Logo },
        { nombre: "Tailwind CSS", logo: Tailwind_Logo },
        { nombre: "Framer Motion", logo: Framer_Logo }
      ]
    },
    // Proyecto 2: Horizontal (2x1)
    {
      id: 2,
      imagenes: [
        { url: Robotools, alt: "Vista móvil" },
      ],
      titulo: "AudioLab",
      descripcion: "Plataforma para producción musical colaborativa. Permite a artistas trabajar juntos en tiempo real desde diferentes ubicaciones.",
      githubUrl: "https://github.com/Edgar767/AudioLab",
      externalUrl: "https://audiolab-demo.vercel.app",
      tecnologias: [
        { nombre: "React", logo: React_Logo },
        { nombre: "Web Audio API", logo: Javascript_Logo },
        { nombre: "Firebase", logo: Vitejs_Logo }
      ]
    },
    // Proyecto 3: Cuadrado (1x1)
    {
      id: 3,
      imagenes: [
        { url: FLStudio, alt: "Interfaz de usuario" },
      ],
      titulo: "DesignHub",
      descripcion: "Colección de recursos para diseñadores UI/UX.",
      githubUrl: "https://github.com/Edgar767/DesignHub",
      externalUrl: "https://designhub.vercel.app",
      tecnologias: [
        { nombre: "React", logo: React_Logo },
        { nombre: "CSS Modules", logo: CSS_Logo },
        { nombre: "Framer Motion", logo: Framer_Logo }
      ]
    },
    // Proyecto 4: Vertical (1x2) - Tamaño mediano
    {
      id: 4,
      imagenes: [
        { url: Robotools, alt: "Sistema de análisis" },
      ],
      titulo: "DataViz",
      descripcion: "Visualización avanzada de datos con gráficos interactivos. Conecta con múltiples fuentes de datos para crear dashboards en tiempo real con actualizaciones automáticas.",
      githubUrl: "https://github.com/Edgar767/DataViz",
      externalUrl: "https://dataviz-demo.vercel.app",
      tecnologias: [
        { nombre: "React", logo: React_Logo },
        { nombre: "D3.js", logo: Javascript_Logo },
        { nombre: "Tailwind CSS", logo: Tailwind_Logo }
      ]
    },
    // Proyecto 5: Cuadrado (1x1)
    {
      id: 5,
      imagenes: [
        { url: FLStudio, alt: "Panel de control" },
      ],
      titulo: "CloudSync",
      descripcion: "Sincronización de archivos entre dispositivos.",
      githubUrl: "https://github.com/Edgar767/CloudSync",
      externalUrl: "https://cloudsync.vercel.app",
      tecnologias: [
        { nombre: "Node.js", logo: NodeJS_Logo },
        { nombre: "MongoDB", logo: MongoDB_Logo },
        { nombre: "React", logo: React_Logo }
      ]
    },
    // Proyecto 6: Horizontal (2x1)
    {
      id: 6,
      imagenes: [
        { url: Robotools, alt: "Sistema de monitoreo" },
      ],
      titulo: "HealthTrack",
      descripcion: "Seguimiento de salud y bienestar con análisis predictivo. Registra tus métricas de salud y obtén recomendaciones personalizadas.",
      githubUrl: "https://github.com/Edgar767/HealthTrack",
      externalUrl: "https://healthtrack.vercel.app",
      tecnologias: [
        { nombre: "React Native", logo: React_Logo },
        { nombre: "Firebase", logo: Vitejs_Logo },
        { nombre: "Chart.js", logo: Javascript_Logo }
      ]
    },
    // Proyecto 7: Vertical (1x2) - Tamaño mediano
    {
      id: 7,
      imagenes: [
        { url: FLStudio, alt: "Interfaz de gestión" },
      ],
      titulo: "TaskFlow",
      descripcion: "Gestión de proyectos con metodología Kanban. Organiza tus tareas en tableros visuales con arrastrar y soltar, notificaciones y colaboración en equipo.",
      githubUrl: "https://github.com/Edgar767/TaskFlow",
      externalUrl: "https://taskflow.vercel.app",
      tecnologias: [
        { nombre: "React", logo: React_Logo },
        { nombre: "Redux", logo: Javascript_Logo },
        { nombre: "Tailwind CSS", logo: Tailwind_Logo }
      ]
    },
    // Proyecto 8: Vertical (1x2) - Mismo tamaño que TaskFlow
    {
      id: 8,
      imagenes: [
        { url: Robotools, alt: "Sistema educativo" },
      ],
      titulo: "EduLearn",
      descripcion: "Plataforma de aprendizaje interactivo con cursos personalizados. Incluye seguimiento de progreso, evaluaciones y certificados digitales.",
      githubUrl: "https://github.com/Edgar767/EduLearn",
      externalUrl: "https://edulearn.vercel.app",
      tecnologias: [
        { nombre: "Next.js", logo: React_Logo },
        { nombre: "MongoDB", logo: MongoDB_Logo },
        { nombre: "Tailwind CSS", logo: Tailwind_Logo }
      ]
    },
    // Proyecto 9: Grande (2x2)
    {
      id: 9,
      imagenes: [
        { url: FLStudio, alt: "Ecosistema de IA" },
      ],
      titulo: "AI Nexus",
      descripcion: "Plataforma unificada para desarrollo de inteligencia artificial. Integra múltiples modelos de IA en un solo lugar con herramientas de despliegue, monitoreo y optimización para desarrolladores e investigadores.",
      githubUrl: "https://github.com/Edgar767/AINexus",
      externalUrl: "https://ainexus.vercel.app",
      tecnologias: [
        { nombre: "Python", logo: Javascript_Logo },
        { nombre: "TensorFlow", logo: CSS_Logo },
        { nombre: "React", logo: React_Logo },
        { nombre: "Docker", logo: Vitejs_Logo }
      ]
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-Goldman text-white mb-12 text-center">
          Proyectos
        </h1>

        {/* Contenedor Bento Grid - 9 proyectos con tamaños personalizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {/* Proyecto 1: Grande (2x2) */}
          <div className="md:col-span-2 md:row-span-2">
            <CardxModal
              imagenes={proyectos[0].imagenes}
              titulo={proyectos[0].titulo}
              descripcion={proyectos[0].descripcion}
              githubUrl={proyectos[0].githubUrl}
              externalUrl={proyectos[0].externalUrl}
              tecnologias={proyectos[0].tecnologias}
            />
          </div>
          
          {/* Proyecto 2: Horizontal (2x1) */}
          <div className="md:col-span-2">
            <CardxModal
              imagenes={proyectos[1].imagenes}
              titulo={proyectos[1].titulo}
              descripcion={proyectos[1].descripcion}
              githubUrl={proyectos[1].githubUrl}
              externalUrl={proyectos[1].externalUrl}
              tecnologias={proyectos[1].tecnologias}
            />
          </div>
          
          {/* Proyecto 3: Cuadrado (1x1) */}
          <div className="md:col-span-1">
            <CardxModal
              imagenes={proyectos[2].imagenes}
              titulo={proyectos[2].titulo}
              descripcion={proyectos[2].descripcion}
              githubUrl={proyectos[2].githubUrl}
              externalUrl={proyectos[2].externalUrl}
              tecnologias={proyectos[2].tecnologias}
            />
          </div>
          
          {/* Proyecto 4: Vertical (1x2) - Tamaño mediano */}
          <div className="md:col-span-1 md:row-span-2">
            <CardxModal
              imagenes={proyectos[3].imagenes}
              titulo={proyectos[3].titulo}
              descripcion={proyectos[3].descripcion}
              githubUrl={proyectos[3].githubUrl}
              externalUrl={proyectos[3].externalUrl}
              tecnologias={proyectos[3].tecnologias}
            />
          </div>
          
          {/* Proyecto 5: Cuadrado (1x1) */}
          <div className="md:col-span-1">
            <CardxModal
              imagenes={proyectos[4].imagenes}
              titulo={proyectos[4].titulo}
              descripcion={proyectos[4].descripcion}
              githubUrl={proyectos[4].githubUrl}
              externalUrl={proyectos[4].externalUrl}
              tecnologias={proyectos[4].tecnologias}
            />
          </div>
          
          {/* Proyecto 6: Horizontal (2x1) */}
          <div className="md:col-span-2">
            <CardxModal
              imagenes={proyectos[5].imagenes}
              titulo={proyectos[5].titulo}
              descripcion={proyectos[5].descripcion}
              githubUrl={proyectos[5].githubUrl}
              externalUrl={proyectos[5].externalUrl}
              tecnologias={proyectos[5].tecnologias}
            />
          </div>
          
          {/* Proyecto 7: Vertical (1x2) - Tamaño mediano */}
          <div className="md:col-span-1 md:row-span-2">
            <CardxModal
              imagenes={proyectos[6].imagenes}
              titulo={proyectos[6].titulo}
              descripcion={proyectos[6].descripcion}
              githubUrl={proyectos[6].githubUrl}
              externalUrl={proyectos[6].externalUrl}
              tecnologias={proyectos[6].tecnologias}
            />
          </div>
          
          {/* Proyecto 8: Vertical (1x2) - Mismo tamaño que TaskFlow */}
          <div className="md:col-span-1 md:row-span-2">
            <CardxModal
              imagenes={proyectos[7].imagenes}
              titulo={proyectos[7].titulo}
              descripcion={proyectos[7].descripcion}
              githubUrl={proyectos[7].githubUrl}
              externalUrl={proyectos[7].externalUrl}
              tecnologias={proyectos[7].tecnologias}
            />
          </div>
          
          {/* Proyecto 9: Grande (2x2) */}
          <div className="md:col-span-2 md:row-span-2">
            <CardxModal
              imagenes={proyectos[8].imagenes}
              titulo={proyectos[8].titulo}
              descripcion={proyectos[8].descripcion}
              githubUrl={proyectos[8].githubUrl}
              externalUrl={proyectos[8].externalUrl}
              tecnologias={proyectos[8].tecnologias}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;