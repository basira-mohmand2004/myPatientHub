
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Healthy Diet",
    category: "Food",
    seller: "Food Panda",
    price: 5,
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
    description: "Healthy meals and fresh food delivered to your door.",
  },
  {
    id: 2,
    name: "Fresh Fruit Basket",
    category: "Food",
    seller: "Grab Food",
    price: 10,
    discount: 5,
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700",
    description: "Fresh fruits selected for a healthy lifestyle.",
  },
  {
    id: 3,
    name: "Healthy Salad",
    category: "Food",
    seller: "Deliveroo",
    price: 15,
    discount: 9,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
    description: "Fresh salad prepared with quality ingredients.",
  },
  {
    id: 4,
    name: "Daily Essentials",
    category: "Health",
    seller: "Health Store",
    price: 20,
    discount: 7,
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=700",
    description: "Everyday essentials for your health and wellbeing.",
  },
];

export default function MarketPlace() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category} ${product.seller}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  return (
    <main className="marketplace-page">
      <header className="marketplace-header">
        <div>
          <p className="breadcrumb">⌂ / Marketplace</p>
          <h1>Marketplace</h1>
        </div>

        <div className="marketplace-toolbar">
          <input
            type="search"
            placeholder="⌕  Type here..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search marketplace"
          />

          <div className="toolbar-icons">
            <span title="Account">●</span>
            <span title="Menu">☰</span>
            <span title="Settings">⚙</span>
            <span title="Notifications">♟</span>
          </div>
        </div>
      </header>

      <section className="marketplace-content">
        <div className="section-heading">
          <div>
            <h2>Search Marketplaces and order what you need</h2>
            <p>Discover products for your everyday needs.</p>
          </div>

          <div className="cart-count" aria-live="polite">
            Cart: {cart.length}
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />

              <div className="product-details">
                <div className="product-price">
                  <span>{product.category}</span>
                  <strong>{product.price} RM</strong>
                </div>

                <h3>{product.seller}</h3>
                <h4>{product.name}</h4>
                <p>{product.description}</p>

                <button
                  className="buy-button"
                  onClick={() => addToCart(product)}
                >
                  BUY NOW
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-message">
            No products found. Try another search.
          </p>
        )}

        <section className="results-section">
          <h2>Other results for {search || "marketplace"} search</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>CATEGORY</th>
                  <th>SERVICE BY</th>
                  <th>DISCOUNT</th>
                  <th>PRICE</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.seller}</td>
                    <td>{product.discount}</td>
                    <td>{product.price} RM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
