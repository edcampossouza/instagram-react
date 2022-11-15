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
  return (
    <div className="post">
      <div className="topo-post">
        <div className="perfil-resposta">
          <img src={post.profImg}/>
          {post.username}
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <img className="img-post" src={post.postImg} />
      <div className="rodape-post">
        <div className="caixa-respostas">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div className="curtidas">
          <img src={post.likedImg} />
          Curtido por&nbsp;<strong>{post.likedUsername}</strong>&nbsp;e&nbsp;
          <strong>outras {post.likes} pessoas</strong>
        </div>
      </div>
    </div>
  );
}
