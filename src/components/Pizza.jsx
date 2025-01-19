import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  // const numPizzas = [];

  return (
    <main className="menu">
      <Header />
      <h2>Our Menu</h2>

      {/* Rendering components as a list */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Menu pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}

      {/* here, <Menu/> component is called multiple times to display different pizza varieties. So instead of doing this, we can render as a list using map() mathod*/}
      {/* <Menu
        name="Pizzas Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photo="pizzas/spinaci.jpg"
        price={10}
      />

      <Menu
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photo="pizzas/funghi.jpg"
        price={13}
      /> */}
      <Footer />
    </main>
  );

  function Menu(props) {
    // props destructuring
    const { name, photoName, ingredients, price } = props.pizzaObj;

    // multiple return based on condition
    // if (props.pizzaObj.soldOut) {
    //   return <p>Sold out</p>;
    // }

    return (
      <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={photoName} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{props.pizzaObj.soldOut ? "SOLD OUT" : price}</span>
        </div>
      </li>
    );
  }
}

function Header() {
  return (
    <header className="header">
      <h1>Anb Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* Conditional rendering with && */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit orS order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* Conditional rendering with ternary operator */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're closed from {closeHour}:00 to {openHour}:00, Please come back
          later!
        </p>
      )}
    </footer>
  );
}

// props destructuring into function's parameter
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Pizza;
