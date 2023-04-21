const date = new Date(Date.now());
let hour = date.getHours();
const getSaludo = () => {
  if (hour < 12) {
    return "Good morning! Welcome to my Portfolio!";
  } else if (hour < 18) {
    return "Good afternoon! Welcome to my Portfolio!";
  } else {
    return "Good evening! Welcome to my Portfolio!";
  }
};
export const saludo = getSaludo();
