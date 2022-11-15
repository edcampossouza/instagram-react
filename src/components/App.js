import NavBar from "./NavBar";
import MobileFooter from "./MobileFooter";
import Corpo from "./Corpo";
export default function App({ data }) {
  return (
    <div className="pagina">
      <NavBar />
      <Corpo data={data} />
      <MobileFooter />
    </div>
  );
}
