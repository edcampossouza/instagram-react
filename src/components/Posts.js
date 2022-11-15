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
    <div class="post">
      <div class="topo-post">
        <div class="perfil-resposta">
          <img src={post.profImg}/>
          {post.username}
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <img class="img-post" src={post.postImg} />
      <div class="rodape-post">
        <div class="caixa-respostas">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div class="curtidas">
          <img src={post.likedImg} />
          Curtido por&nbsp;<strong>{post.likedUsername}</strong>&nbsp;e&nbsp;
          <strong>outras {post.likes} pessoas</strong>
        </div>
      </div>
    </div>
  );
}
