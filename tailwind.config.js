/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //Aqui se configuran los colores las fuentes, y los screens y resoluciones
    screens: {
      first: "240px",
      // => @media (min-width: 240px) { ... }
      miniMobile: "280px",
      // => @media (min-width: 280px) { ... }
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      midMobile: "400px",
      // => @media (min-width: 400px) { ... }
      miniTablet: "520px",
      // => @media (min-width: 520px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      midTablet:"734px",
      // => @media (min-width: 734px) { ... }
      laptop: "1010px",
      // => @media (min-width: 1010px) { ... }
      desktop: "1117px",
      // => @media (min-width: 1117px) { ... }
      midDesktop:"1428px",
      // => @media (min-width: 1428px) { ... }
      tv:"2098px",
      // => @media (min-width: 2098px) { ... }
      midtv:"3162px",
      // => @media (min-width: 3162px) { ... }
    },
    colors: {
      violet: "#9BA4ED",
      gray20: "#3E3C3C",
      gray50: "#01000c",
      white: "#fff",
      gray60: "rgba(42, 22, 156, 0.9)",
      azulDark: "rgba(42, 22, 156)",
      azulOscuro: "rgba(21, 17, 41)",
      gray: "#242427",
      grayOscuro: "#101011",
      morado: "#2A2F4F",
      morado2: "#2a2f4fe3",
      transparent: "rgba(255, 255, 255, 0)",
      violetClaro:"rgb(193, 110, 238)",
      carton:"#fff1e6",
      carton2:"#EADEDA"
    },
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        dashiellText: ['"dashiell-text"', 'serif']
      },
      gridTemplateColumns: {
        two: "auto auto",
      },
      backgroundImage: {
        'circle-gradient': 'radial-gradient(ellipse at center bottom, rgba(42,47,79,1) 44%, rgba(1,0,12,1) 100%)',
        'circle-gradient2': 'radial-gradient(ellipse at center bottom, rgba(21, 17, 41) 44%, rgba(1,0,12,1) 100%)',
        'circle-gradient3': 'radial-gradient(ellipse at center bottom, #654ea3  10%,#310094 100%)',
        'circle-gradient4': 'radial-gradient(ellipse at center bottom, rgba(101, 78, 163, 0.1) 10%, rgba(49, 0, 148, 0.1) 100%)'
        
      },
    },
  },
  plugins: [],
};
