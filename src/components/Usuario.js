export default function Usuario({ user }) {
  return (
    <div className="perfil-usuario">
      <img src={user.image} />
      <div>
        <div className="nomeperfil">{user.username}</div>
        <div className="nomereal">{user.realname}</div>
      </div>
    </div>
  );
}
