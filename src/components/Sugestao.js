export default function Sugestao({ sugestions }) {
  return (
    <>
      {" "}
      <div className="titulo-sugestoes">
        <div className="texto-medio">Sugestões para você</div>
        <div className="texto-escuro">Ver tudo</div>
      </div>
      <div className="sugestoes">
        {sugestions.map((sugestion) => (
          <div key={sugestion.username} className="sugestao">
            <div className="perfilsugestao">
              <img src={sugestion.image} />
              <div className="texto-sugestao">
                <div className="nomeperfil">{sugestion.username}</div>
                <div className="texto-inferior">Segue você</div>
              </div>
            </div>
            <div className="seguir">Seguir</div>
          </div>
        ))}
        <div className="caixa-sobre">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div className="texto-copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </>
  );
}
