import $ from "jquery";
import "./main.css";
import { getButtonClick } from "./button/button";
import { getClick } from "./button/button";
import firstImage from "./assets/pexels.jpeg";
import secondImage from "./assets/kraski.jpeg";


const text = document.createElement("h1");
text.textContent = "HW22";
document.querySelector("body").appendChild(text);

const picture = document.createElement("img");
picture.setAttribute("src", firstImage);
document.querySelector("body").appendChild(picture);

const illustration = document.createElement("img");
illustration.setAttribute("src", secondImage);
document.querySelector("body").appendChild(illustration);

throw new Error("Error!");

getButtonClick();
getClick();
