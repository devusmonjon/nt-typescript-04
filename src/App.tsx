import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter/Counter";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SingleProducts from "./components/singleProducts/SingleProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Counter />} />
          <Route path="products/:id" element={<SingleProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
