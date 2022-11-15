import { useState } from "react";

export default function Usuario({ user }) {
  const [realname, setRealName] = useState(user.realname);
  const [imgLink, setImgLink] = useState(user.image);
  function changeRealName() {
    const newName = prompt("Digite o novo nome...");
    if (!newName) {
      alert("Nome vazio!");
    } else setRealName(newName);
  }
  function changeImgLink() {
    const newLink = prompt("Digite o novo link...");
    if (!newLink) {
      alert("Link vazio!");
    } else setImgLink(newLink);
  }
  return (
    <div className="perfil-usuario">
      <img onClick={changeImgLink} src={imgLink} />
      <div>
        <div className="nomeperfil">{user.username}</div>
        <div className="nomereal">
          {realname}{" "}
          <ion-icon onClick={changeRealName} name="pencil-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
