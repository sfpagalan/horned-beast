import './App.css'
import Header from'./components/Header';
import Footer from'./components/Footer';
import Gallery from'./components/Gallery';


function App() {

  return (
    <div>
      <Header subTitle='Look at my Beasts!!' /> 
      <hr />
      <Gallery />
      <hr />
      <Footer />
    </div>

  )
}

export default App
