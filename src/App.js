import './App.css';
import Header from "./components/header/header";
import Page from "./components/page/page";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Header/>
        <Page/>
      <Footer/>
    </div>
  );
}

export default App;
