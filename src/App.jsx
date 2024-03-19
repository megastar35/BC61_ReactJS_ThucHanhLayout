import "./App.css";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import ItemList from "./ItemList/ItemList";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Banner />
      <ItemList />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
