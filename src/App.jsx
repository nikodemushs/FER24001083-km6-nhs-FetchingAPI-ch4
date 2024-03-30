import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import DotaDB from "./DotaDB";
import HeroDetail from "./HeroDetail";
import HeroMatchup from "./HeroMatchup";
import Items from "./Items";
import ItemDetail from "./ItemDetail";
import { Home } from "./Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/heroes",
      element: <DotaDB />,
    },
    {
      path: "/hero-detail",
      element: <HeroDetail />,
    },
    {
      path: "/hero-matchup",
      element: <HeroMatchup />,
    },
    {
      path: "/items",
      element: <Items />,
    },
    {
      path: "/item-detail",
      element: <ItemDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}
