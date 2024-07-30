import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <>
      <div className="main">
        <SideBar />
        <div className="container">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
