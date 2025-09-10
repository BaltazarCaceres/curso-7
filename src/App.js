import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';
import Home from './components/Home';
import Menu from './components/Menu';
import CartModal from './components/CartModal';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './styles/form.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (index) => setCartItems(prev => prev.filter((_, i) => i !== index));
  const resetCart = () => {
    setCartItems([]);
    setDiscount(0);
    setDiscountMessage('');
  };

  const applyDiscount = (code) => {
    if (code === 'LEMON10') {
      setDiscount(0.1);
      setDiscountMessage('✅ Descuento aplicado: 10%');
    } else {
      setDiscount(0);
      setDiscountMessage('❌ Código inválido');
      setTimeout(() => {
        setDiscountMessage('');
      }, 10000);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountedTotal = total - total * discount;

  return (
    <Router>
      <Header />
      <main>
        <button
          className="open-cart-btn"
          onClick={() => setIsCartOpen(true)}
          title={cartItems.length === 0 ? 'Agrega productos para continuar' : 'Ver carrito'}
        >
          🛒
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/reservas" element={<ReservationForm />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>

        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          applyDiscount={applyDiscount}
          total={discountedTotal}
          discount={discount}
          resetCart={resetCart}
          discountMessage={discountMessage}
        />
      </main>
      <Footer />
    </Router>
  );
}

export default App;