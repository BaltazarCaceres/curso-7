import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart, applyDiscount, total }) {
  return (
    <div className="cart">
      <h2 className="cart-title">🛍️ Tu Carrito</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">No has agregado nada aún.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
  <img src={item.image} alt={item.name} className="cart-thumb" />
  <div className="cart-details">
    <span className="cart-name">{item.name}</span>
    <span className="cart-price">${item.price}</span>
    </div>
  <button className="remove-btn" onClick={() => removeFromCart(index)}>✖</button>
</li>
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <input
          type="text"
          className="discount-input"
          placeholder="Código de descuento"
          onBlur={(e) => applyDiscount(e.target.value)}
        />
        <h3 className="cart-total">Total con descuento: <span>${total.toFixed(2)}</span></h3>
        <button className="whatsapp-btn" onClick={() => sendToWhatsApp(cartItems, total)}>
          📲 Enviar pedido por WhatsApp
        </button>
      </div>
    </div>
  );
}

function sendToWhatsApp(cartItems, total) {
  const items = cartItems.map(item => `• ${item.name} - $${item.price}`).join('\n');
  const message = `Hola, quiero hacer un pedido:\n${items}\n\nTotal con descuento: $${total.toFixed(2)}`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '529991234567'; // ← Reemplaza con tu número real
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

export default Cart;