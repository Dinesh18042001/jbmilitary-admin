import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Dashboard from './Component/Dashboard';
import Products from './Component/Products';
import Orders from './Component/Orders';
import Customer from './Component/Customer';
import Categories from './Component/Categories';
import Login from './Component/Login/Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Base Layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders/>} />
          <Route path="customer" element={<Customer/>} />
          <Route path="categories" element={<Categories/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;