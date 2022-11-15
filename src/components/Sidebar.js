import Usuario from "./Usuario";
import Sugestao from "./Sugestao";
export default function Sidebar({ data }) {
  const { user, sugestions } = data;
  return (
    <div className="sidebar">
      <Usuario user={user} />
      <Sugestao sugestions={sugestions} />
    </div>
  );
}
