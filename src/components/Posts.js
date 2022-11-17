import { useState } from "react";

export default function Posts({ data }) {
  const { posts } = data;
  return (
    <div className="caixa-posts">
      {posts.map((post) => (
        <Post key={post.profImg} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);
  return (
    <div className="post" data-test="post">
      <div className="topo-post">
        <div className="perfil-resposta">
          <img src={post.profImg} />
          {post.username}
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="post-img-container">
        <img
          data-test="post-image"
          onDoubleClick={() => {
            setLiked((prevState) => {
              if (!prevState) {
                setLikes((cnt) => cnt + 1);
                setShowHeart(true);
                setTimeout(() => {
                  setShowHeart(false);
                }, 500);
                prevState = !prevState;
              }
              return prevState;
            });
          }}
          className="img-post"
          src={post.postImg}
        />
        <div className={`post-heart ${showHeart ? "icon-show" : null}`}>
          <ion-icon name="heart"></ion-icon>
        </div>
      </div>
      <div className="rodape-post">
        <div className="caixa-respostas">
          <div>
            <span className={liked ? "red-icon" : null}>
              <ion-icon
                onClick={() =>
                  setLiked((prevState) => {
                    if (prevState) {
                      setLikes((prev) => prev - 1);
                    } else {
                      setLikes((prev) => prev + 1);
                    }
                    return !prevState;
                  })
                }
                name={liked ? "heart" : "heart-outline"}
                data-test="like-post"
              ></ion-icon>
            </span>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon
            onClick={() => setSaved((prevState) => !prevState)}
            name={saved ? "bookmark" : "bookmark-outline"}
            data-test="save-post"
          ></ion-icon>
        </div>
        <div className="curtidas">
          <img src={post.likedImg} />
          Curtido por&nbsp;<strong>{post.likedUsername}</strong>&nbsp;e&nbsp;
          <strong>
            outras{" "}
            <span data-test="likes-number">
              {likes.toLocaleString().replace(",", ".")}
            </span>{" "}
            pessoas
          </strong>
        </div>
      </div>
    </div>
  );
}
