
import { useState } from "react";



const medicines = [
  {
    id: 1,
    name: "Esomeprazole",
    category: "Tablet",
    pharmacy: "Carry Medical",
    price: 10,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
  },
  {
    id: 2,
    name: "Paracetamol",
    category: "Tablet",
    pharmacy: "Hamza Pharma",
    price: 8,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400",
  },
  {
    id: 3,
    name: "Vitamin C",
    category: "Supplement",
    pharmacy: "OK Pharmacy",
    price: 9,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400",
  },
];


function PharmacyPlace() {
  const [search, setSearch] = useState("");
  const [tableSearch, setTableSearch] = useState("");

  const filteredMedicines = medicines.filter((medicine) =>
    `${medicine.name} ${medicine.category} ${medicine.pharmacy}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const tableMedicines = filteredMedicines.filter((medicine) =>
    `${medicine.name} ${medicine.category} ${medicine.pharmacy}`
      .toLowerCase()
      .includes(tableSearch.toLowerCase())
  );

  return (
    <main className="pharmacy-page">
      <header className="pharmacy-header">
        <div className="pharmacy-breadcrumb">
          <span>⌂</span> / Pharmacyplace
        </div>

        <h1>Pharmacyplace</h1>

        <input
          className="pharmacy-search"
          type="search"
          placeholder="Search medicines..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <section className="pharmacy-content">
        <h2>Search Pharmacies for Medicines</h2>

        <div className="medicine-grid">
          {filteredMedicines.map((medicine) => (
            <article className="medicine-card" key={medicine.id}>
              <div className="medicine-image">
  <img
    src={medicine.image}
    alt={medicine.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
</div>
              <div className="medicine-info">
                <div className="medicine-price-row">
                  <h3>{medicine.name}</h3>
                  <span>{medicine.price} RM</span>
                </div>

                <p className="medicine-category">
                  Category: {medicine.category}
                </p>

                <h3 className="pharmacy-name">
                  {medicine.pharmacy}
                </h3>

                <p>
                  Check medicine availability and price with the pharmacy.
                </p>

                <button
                  className="pharmacy-buy-button"
                  type="button"
                  onClick={() =>
                    alert(
                      `Please contact ${medicine.pharmacy} to confirm availability.`
                    )
                  }
                >
                  BUY NOW
                </button>
              </div>
            </article>
          ))}
        </div>

        <section className="pharmacy-results">
          <h2>
            {filteredMedicines.length} medicines found
            {search ? ` for "${search}"` : ""}
          </h2>

          <input
            className="pharmacy-table-search"
            type="search"
            placeholder="Search..."
            value={tableSearch}
            onChange={(event) => setTableSearch(event.target.value)}
          />

          <div className="pharmacy-table-wrapper">
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Service by</th>
                </tr>
              </thead>

              <tbody>
                {tableMedicines.map((medicine) => (
                  <tr key={medicine.id}>
                    <td>{medicine.name}</td>
                    <td>{medicine.category}</td>
                    <td>{medicine.pharmacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {tableMedicines.length === 0 && (
            <p>No matching medicines found.</p>
          )}
        </section>
      </section>
    </main>
  );
}

export default PharmacyPlace;
