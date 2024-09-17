import "./App.css";
import Header from "./Header/Header";
import SideNav from "./SideNav";
import Hotel from "./Hotel/Hotel";

function App() {
  return (
    <div className="container mx-auto px-5 pt-20">
      <Header />
      <div className="flex">
        <SideNav />
        <Hotel />
      </div>
    </div>
  );
}

export default App;
