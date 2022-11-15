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
  posts: [
    {
      profImg: "./assets/storie-2.png",
      username: "meowed",
      postImg: "./assets/post-1.png",
      likes: 101523,
      likedImg: "./assets/storie-6.png",
      likedUsername: "respondeai",
    },
    {
        profImg: "./assets/storie-3.png",
        username: "barked",
        postImg: "./assets/post-2.png",
        likes: 99159,
        likedImg: "./assets/adorableanimals.png",
        likedUsername: "adorable_animals",
      },
    {
      profImg: "./assets/chibirdart 1.png",
      username: "chibirdart",
      postImg: "./assets/chick.jpg",
      likes: 123456,
      likedImg: "./assets/storie-1.png",
      likedUsername: "9gag",
    },
  ],
};
ReactDOM.render(<App data={data} />, root);
