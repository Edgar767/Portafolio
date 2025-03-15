import React from 'react';

const DarkVoidGradient = () => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]" />
      <div
        className="absolute inset-0 bg-[length:60px_60px] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
        }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/30 to-transparent blur-[100px] opacity-50" />
      
      {/* Gradiente en la parte inferior para conectar con la siguiente página */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};

export default DarkVoidGradient;
