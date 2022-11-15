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
    <div className="perfil-usuario" data-test="user">
      <img onClick={changeImgLink} data-test="profile-image" src={imgLink} />
      <div>
        <div className="nomeperfil">{user.username}</div>
        <div>
          <span className="nomereal" data-test="name">
            {realname}
          </span>
          <span className="editname">
            <ion-icon
              onClick={changeRealName}
              name="pencil-outline"
              data-test="edit-name"
            ></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
}
