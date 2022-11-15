import NavBar from "./NavBar";
import MobileFooter from "./MobileFooter";
import Corpo from "./Corpo";
import Posts from "./Posts";
export default function App({ data }) {
  return (
    <div className="pagina">
      <NavBar />
      <Corpo data={data} />
      <Posts data={data} />
      <MobileFooter />
    </div>
  );
}
