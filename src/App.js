import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import { ShopContext } from './context';

function App() {
  return (
    <>
      <Header />
      <ShopContext>
        <Shop />
      </ShopContext>
      <Footer />
    </>
  );
}

export default App;