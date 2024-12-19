import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Dashboard from './Component/Dashboard';
import Products from './Component/Products';
import Orders from './Component/Orders';
import Customer from './Component/Customer';
import Categories from './Component/Categories';
import Login from './Component/Login/login';
import SubCategories from './Component/SubCategories';
import AddNewProduct from './Component/Forms/AddNewProduct';
import AddNewCategory from './Component/Forms/AddNewCategory';
import AddSubCategory from './Component/Forms/AddSubCategory';
import AuctionsPage from './Component/Auctions/AuctionsPage';
import AddNewAuction from './Component/Forms/AddNewAuction';


function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route Without Layout */}
        <Route path="/login" element={<Login />} />

        {/* Base Layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customer" element={<Customer />} />
          <Route path="categories" element={<Categories />} />
          <Route path="sub-categories" element={<SubCategories/>} />
          <Route path="products/add-new-product" element={<AddNewProduct/>} />
          <Route path="categories/add-new-category" element={<AddNewCategory/>} />
          <Route path="add-sub-category" element={<AddSubCategory/>} />
          <Route path="auctions" element={<AuctionsPage/>} />
          <Route path="add-new-auction" element={<AddNewAuction/>} />


          
          {/* <Route path="add-new-product" element={<AddNewProduct/>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



