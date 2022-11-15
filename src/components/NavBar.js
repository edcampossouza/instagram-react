export default function NavBar() {
  return (
    <div className="barra-topo">
      <div className="container-topo">
        <div className="caixa-logo">
          <ion-icon className="logo-icone" name="logo-instagram"></ion-icon>
          <img className="logo-imagem" src="./assets/logo.png" />
        </div>
        <input className="caixa-pesquisa" placeholder="Pesquisar" />
        <div className="caixa-direita">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
      <div className="container-topo-mobile">
        <ion-icon className="logo-icone" name="logo-instagram"></ion-icon>
        <img className="logo-imagem" src="./assets/logo.png" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
  );
}
