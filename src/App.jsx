import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/projects/projects";
import HeaderComplete from "./components/header/HeaderComplete";
import { useEffect, useRef, useState } from "react";
import Contact from "./components/Contact";


function App() {
  //refencia ancho
  const containerWidth = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);


  //UseEffect para capturar el ancho
  useEffect(() => {
    //funcion y disparador para almacenar el width en el useState()
    function handleResize() {
      const elementWidth = containerWidth.current.offsetWidth;
      setWidth(elementWidth);
    }
    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div ref={containerWidth}>
    <HeaderComplete width={width}/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    </Routes>
    <Contact />
    </div>
  )
}

export default App;
