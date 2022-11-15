import { useState } from "react";

export default function Usuario({ user }) {
  const [realname, setRealName] = useState(user.realname);
  function changeRealName() {
    const newName = prompt("Digite o novo nome...");
    if (!newName) {
      alert("Nome invalido!");
    } else setRealName(newName);
  }
  return (
    <div className="perfil-usuario">
      <img src={user.image} />
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
