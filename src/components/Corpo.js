import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Corpo({ data }) {
  return (
    <div className="conteudo">
      <div className="coluna-principal">
        <Stories data={data} />
        <Posts data={data} />
      </div>
      <Sidebar data={data} />
    </div>
  );
}
