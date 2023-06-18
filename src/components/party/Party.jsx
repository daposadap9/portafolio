import React, { useEffect, useState } from 'react'

const Party = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500']; // Colores de Tailwind CSS

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-[-2] ${colors[currentColorIndex]}`}
      style={{ opacity: 0.2 }}
    >
      {/* Contenido adicional si lo necesitas */}
    </div>
  );
};

export default Party