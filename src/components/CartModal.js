import { useState } from 'react';
import '../styles/CartModal.css';

function CartModal({ isOpen, onClose, cartItems, removeFromCart, applyDiscount, total, discount, resetCart }) {
  const [code, setCode] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');

  const handleSend = () => {
  const items = cartItems.map(item => `• ${item.name} - $${item.price}`).join('\n');
  const totalText = discount > 0
    ? `Total con descuento: $${total.toFixed(2)}`
    : `Total: $${(cartItems.reduce((sum, item) => sum + item.price, 0)).toFixed(2)}`;

  const message = `Hola, quiero hacer un pedido:\n${items}\n\n${totalText}`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '529991234567';
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  resetCart();
  onClose();
};

  const handleDiscountChange = (value) => {
  setCode(value);

  if (value === 'LEMON10') {
    applyDiscount(value);
    setDiscountMessage('✅ Descuento aplicado: 10%');
  } else {
    applyDiscount('');
    setDiscountMessage('❌ Código inválido');

    // 🕒 Limpiar después de 10 segundos
    setTimeout(() => {
      setCode('');
      setDiscountMessage('');
    }, 10000);
  }
};

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>🛍️ Tu Carrito</h2>

        {cartItems.length === 0 ? (
          <p>No has agregado nada aún.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-thumb" />
                <div className="cart-details">
                  <span className="cart-name">{item.name}</span>
                  <span className="cart-price">${item.price}</span>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
        )}

        <input
          type="text"
          className="discount-input"
          placeholder="Código de descuento"
          value={code}
          onChange={(e) => handleDiscountChange(e.target.value)}
        />
        <p className="discount-message">{discountMessage}</p>

        <h3 className="cart-total">
          {discount > 0
            ? `Total con descuento: $${total.toFixed(2)}`
            : `Total: $${(cartItems.reduce((sum, item) => sum + item.price, 0)).toFixed(2)}`}
        </h3>

        <button
  className="whatsapp-btn"
  onClick={handleSend}
  disabled={cartItems.length === 0}
  title={cartItems.length === 0 ? 'Agrega un aproducto para continuar' : ''}
>
  📲 Enviar pedido por WhatsApp
</button>
      </div>
    </div>
  );
}

export default CartModal;