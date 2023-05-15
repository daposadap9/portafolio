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
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  //refencia ancho
  const containerWidth = useRef(null);
  const audioRef = useRef(null);


  const [width, setWidth] = useState(window.innerWidth);
  const [musicActive, setmusicActive] = useState(false)


  const handleActivateMusic = () => {
    setmusicActive(!musicActive)
    const audioElement = audioRef.current;

    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
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

  const handleAudioEnded = () => {
    const audioElement = audioRef.current;
    audioElement.currentTime = 0; // Reinicia el tiempo de reproducción
    audioElement.play();
  };
  
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
          <ScrollToTop /> {/* Aquí colocamos el componente ScrollToTop que es para que el scroll quede en 0 cada vez que yo cambie de ruta */}

          <a href="https://web.whatsapp.com/send?phone=+573207689885" target="_blank" rel="noreferrer" className="fixed w-[65px] h-[65px] z-[9] bottom-2 right-2 bg-[#05aa08] rounded-full p-2 flex items-center justify-center border-2 border-white text-white hover:opacity-90 cursor-pointer overflow-hidden"><FontAwesomeIcon size="3x" icon={faWhatsapp}/></a>
          <div onClick={handleActivateMusic} className="fixed w-[50px] text-white h-[50px] z-[9] top-24 right-2 bg-morado rounded-full p-2 flex items-center justify-center border-2 border-white hover:opacity-90 cursor-pointer overflow-hidden"><FontAwesomeIcon size="2x" icon={musicActive ? faPause: faPlay }/>
          </div>
          <div  className="absolute top-0 opacity-0 w-full" >
            <audio ref={audioRef}
            controls={false}
            onEnded={handleAudioEnded}>
            <source src="./audio/Song.mp3" type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
          </div>


          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;
