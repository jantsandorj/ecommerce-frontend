import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./pages/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin.dashboard";
import Costumer from "./outlets/admin.costumer";
import Message from "./outlets/admin.massage";
import Orders from "./outlets/admin.orders";
import Products from "./outlets/admin.products";
import Settings from "./outlets/admn.settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/costumer" element={<Costumer />} />
          <Route path="/message" element={<Message />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
