import Stories from "./Stories";

export default function Corpo({ data }) {
  return (
    <div className="conteudo">
      <div className="coluna-principal">
        <Stories data={data} />
      </div>
    </div>
  );
}
