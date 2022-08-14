import React from "react";
import ReactDOM from "react-dom/client";
import { Greeating, UserCard } from "./components/Greeating";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.2, 22.3]}
      address={{ street: "123 man street", city: "New York" }}
    />
  </>
);
