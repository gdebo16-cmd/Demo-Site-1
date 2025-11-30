import React from "react";
import { createRoot } from "react-dom/client";


//function Welcome() {
    //return "welcome to React";
//};

//const WelcomeToTheNewWorld = () => {
    //return "Hello, new world";
//};

const MyComponent = () => {
    return <h1>Hello, there!</h1>;
};

const rootElement = 
document.getElementById("root");
const root = createRoot(rootElement);
root.render(<MyComponent/>);