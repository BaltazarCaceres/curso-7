import '../styles/Menu.css';
import ensalada from '../assets/ensalada-griega.jpg';
import pasta from '../assets/pasta-mediterranea.jpg';
import hummus from '../assets/hummus-pita.jpg';
import brochetas from '../assets/brochetas-cordero.jpg';

const menuItems = [
  { id: 1, name: 'Ensalada Griega', price: 120, image: ensalada },
  { id: 2, name: 'Pasta Mediterránea', price: 180, image: pasta },
  { id: 3, name: 'Hummus con Pan Pita', price: 90, image: hummus },
  { id: 4, name: 'Brochetas de Cordero', price: 210, image: brochetas },
];

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h2>Menú del Día</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;