import { useState } from "react";
import "./App.css";
import DisplayCards from "./Components/DisplayCards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostForm from "./Components/PostForm";
import SideBar from "./Components/SideBar";
import PostsContextProvider from "./store/post-card-store";
function App() {
  let [page, setPage] = useState("Home");

  return (
    <>
      <PostsContextProvider>
        <div className="main">
          <SideBar page={page} setPage={setPage} />
          <div className="container">
            <Header />
            {page === "Home" ? <DisplayCards /> : <PostForm />}
            <Footer />
          </div>
        </div>
      </PostsContextProvider>
    </>
  );
}

export default App;
