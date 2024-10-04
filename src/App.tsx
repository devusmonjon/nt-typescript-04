import { Route, Routes } from "react-router-dom";
import "./App.css";
import Countr from "./components/countr/Countr";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SingleProducts from "./components/singleProducts/SingleProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Countr />} />
          <Route path="products/:id" element={<SingleProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
