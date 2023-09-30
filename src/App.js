import Head from "./components/top";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShowItems from "./components/itemList";
import CartPage from "./components/cartList";
import ItemPage from "./components/itemDescription";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head></Head>
        <Routes>
          <Route path="/" element={<ShowItems />} />
          <Route path="/cartList" element={<CartPage />} />
          <Route path="/itemDescription/:id" element={<ItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
