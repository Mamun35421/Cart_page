
import './App.css';
import Cart from './Pages/Cart/Cart';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <div className='main-container'>
      <Navbar/>
        <Cart />
       
      </div>
      <Footer/>
    </div>

  );
}

export default App;
