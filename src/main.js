import $ from "jquery";
import "./main.css";
import { getButtonClick, getClick } from "./button/button";
import firstImage from "./assets/pexels.jpeg";
import secondImage from "./assets/kraski.jpeg";

getButtonClick.addEventListener("click", getClick);

const text = document.createElement("h1");
text.textContent = "HW22";
document.querySelector("body").appendChild(text);

const picture = document.createElement("img");
picture.setAttribute("src", firstImage);
picture.style.width = "600px";
picture.style.height = "400px";
document.querySelector("body").appendChild(picture);

const illustration = document.createElement("img");
illustration.setAttribute("src", secondImage);
illustration.style.width = "600px";
illustration.style.height = "400px";
document.querySelector("body").appendChild(illustration);



