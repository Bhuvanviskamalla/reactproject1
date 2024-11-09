import React, { StrictMode, useContext, useState } from "react";
import { createRoot } from "react-dom";
// import Pizza from "./Pizza";
import Order from "./order";
import PizzaOftheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Padre Gino's"),
//     React.createElement(Pizza, {
//       name: "everything",
//       description: "every damn thing",
//     }),
//     React.createElement(Pizza, {
//       name: "pasta",
//       description: "every damn pasta",
//     }),
//     React.createElement(Pizza, {
//       name: "no pineapple",
//       description: "shut the fuck up and eat",
//     }),
//     React.createElement(Pizza, {
//       name: "flying fuck",
//       description: "no one gives a flying fuck about your pizza",
//     }),
//   ]);
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Padre Gino's</h1>
//       <Pizza
//         name="Pepperoni"
//         description="Mozzarella Cheese, Pepperoni"
//         image={"/public/pizzas/pepperoni.webp"}
//       />
//       <Pizza
//         name="The Hawaiian Pizza"
//         description="Sliced Ham, Pineapple"
//         image={"/public/pizzas/hawaiian.webp"}
//       />
//       <Pizza
//         name="The Big Meat Pizza"
//         description="chicken,,mutton"
//         image={"/public/pizzas/big_meat.webp"}
//       />
//     </div>
//   );
// };

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOftheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
