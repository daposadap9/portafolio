import { Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/projects/Projects"
import HeaderComplete from "./components/header/HeaderComplete";
import { useEffect, useRef, useState } from "react";
import Contact from "./components/Contact";
import About from "./pages/About/About";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    <>
      <div className="fixed-bg"></div>
      <div className="content">
        <div className="App" ref={containerWidth}>
          <HeaderComplete width={width}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <div className="fixed w-[70px] h-[70px] z-[9] bottom-2 right-2 bg-[#05aa08] rounded-full p-2 flex items-center justify-center border-2 border-white text-white hover:opacity-90 cursor-pointer overflow-hidden"><FontAwesomeIcon size="3x" icon={faWhatsapp}/></div>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;
