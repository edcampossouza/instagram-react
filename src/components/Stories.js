export default function Stories({ data }) {
  const { stories } = data;
  return (
    <div className="caixa-stories">
      {stories.map((story) => (
        <Story key={story.image} story={story} />
      ))}
      <ion-icon class="seta-direita" name="chevron-forward-outline"></ion-icon>
    </div>
  );
}

function Story({ story }) {
  return (
    <div className="story-perfil">
      <div className="story">
        <img
          className="background-image"
          src="./assets/stories_background.png"
        />
        <img className="story-img" src={story.image} />
      </div>
    </div>
  );
}
