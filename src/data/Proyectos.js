// src/data/proyectos.js
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

export const proyectosData = [
  {
    // Proyecto 1:
    id: 1,
    imagenes: [
      { url: FLStudio, alt: "Vista principal del proyecto" },
      { url: Robotools, alt: "Detalle de la interfaz" },
      { url: FLStudio, alt: "Vista principal del proyecto" },
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
  // Proyecto 2:
  {
    id: 2,
    imagenes: [
      { url: Robotools, alt: "Vista móvil" },
      { url: FLStudio, alt: "Vista principal del proyecto" },
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
  // Proyecto 3:
  {
    id: 3,
    imagenes: [
      { url: FLStudio, alt: "Interfaz de usuario" },
      { url: Robotools, alt: "Vista móvil" },
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
  // Proyecto 4:
  {
    id: 4,
    imagenes: [
      { url: Robotools, alt: "Sistema de análisis" },
      { url: FLStudio, alt: "Interfaz de usuario" },
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
  // Proyecto 5:
  {
    id: 5,
    imagenes: [
      { url: FLStudio, alt: "Panel de control" },
      { url: Robotools, alt: "Vista de configuración" },
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
  // Proyecto 6:
  {
    id: 6,
    imagenes: [
      { url: Robotools, alt: "Sistema de monitoreo" },
      { url: FLStudio, alt: "Interfaz de usuario" },
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
  // Proyecto 7:
  {
    id: 7,
    imagenes: [
      { url: FLStudio, alt: "Interfaz de gestión" },
      { url: Robotools, alt: "Vista de tareas" },
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
  // Proyecto 8:
  {
    id: 8,
    imagenes: [
      { url: Robotools, alt: "Sistema educativo" },
      { url: FLStudio, alt: "Interfaz de usuario" },
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
  // Proyecto 9:
  {
    id: 9,
    imagenes: [
      { url: FLStudio, alt: "Ecosistema de IA" },
      { url: Robotools, alt: "Interfaz de usuario" },
      { url: FLStudio, alt: "Ecosistema de IA" },
      { url: Robotools, alt: "Interfaz de usuario" },
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

// Función helper para obtener un proyecto por ID
export const getProyectoPorId = (id) => {
  return proyectosData.find(proyecto => proyecto.id === id);
};

// Función helper para obtener proyectos por tecnología
export const getProyectosPorTecnologia = (tecnologia) => {
  return proyectosData.filter(proyecto => 
    proyecto.tecnologias.some(tech => 
      tech.nombre.toLowerCase().includes(tecnologia.toLowerCase())
    )
  );
};

// Función helper para obtener proyectos destacados (los grandes)
export const getProyectosDestacados = () => {
  return proyectosData.filter(proyecto => [1, 9].includes(proyecto.id));
};