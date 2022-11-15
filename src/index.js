import ReactDOM from "react-dom";
import App from "./components/App.js";

const root = document.querySelector(".root");
const data = {
  stories: [
    { image: "./assets/storie-1.png", username: "9gag" },
    { image: "./assets/storie-2.png", username: "meowed" },
    { image: "./assets/storie-3.png", username: "barked" },
    { image: "./assets/storie-4.png", username: "nathanwpyle..." },
    { image: "./assets/storie-5.png", username: "wawawiwac..." },
    { image: "./assets/storie-6.png", username: "respondeai" },
    { image: "./assets/storie-7.png", username: "fillomoderna" },
    { image: "./assets/storie-8.png", username: "meme" },
  ],
};
ReactDOM.render(<App data={data} />, root);
