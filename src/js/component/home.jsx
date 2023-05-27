import React, { useState } from "react";
import Lights from "./lights.jsx";
import Display from "./display.jsx";
import Buttons from "./buttons.jsx";

const Home = ( ) => {

  const [red, setRed] = useState("dark red");
  const [orange, setOrange] = useState("dark orange");
  const [green, setGreen] = useState("dark green");
  const [yellow, setYellow] = useState("dark yellow");
  const [blue, setBlue] = useState("dark blue");
  const [purple, setPurple] = useState("dark purple");

  const glowColor = (color, setColor) => {
    setColor("dark " + color + " selected");
  };

  const darkColor = (color, setColor) => {
    setColor("dark " + color);
  };

  const turnOnLights = () => {
    glowColor("red", setRed);
    glowColor("orange", setOrange);
    glowColor("green", setGreen);
  };

  const turnOffLights = () => {
    darkColor("red", setRed);
    darkColor("orange", setOrange);
    darkColor("green", setGreen);
  };

  const changeColors = () => {
    const alternativeColors = ["purple", "blue", "yellow"];
    const newColors = alternativeColors.map(color => {
      const randomIndex = Math.floor(Math.random() * alternativeColors.length);
      return "dark " + alternativeColors[randomIndex] + " selected";
    })
    setRed(newColors[0]);
    setOrange(newColors[1]);
    setGreen(newColors[2]);
};

  

  return (
    <>
      <Alert />
      <TrafficLight
        red={red}
        orange={orange}
        green={green}
        purple={purple}
        blue={blue}
        yellow={yellow}
        setRed={setRed}
        setOrange={setOrange}
        setGreen={setGreen}
        setBlue={setBlue}
        setYellow={setYellow}
        setPurple={setPurple}
        glowColor={glowColor}
        darkColor={darkColor}
      />
      <Buttons turnOnLights={turnOnLights} turnOffLights={turnOffLights} changeColors={changeColors}/>
    </>
  );
};

export default Home;



