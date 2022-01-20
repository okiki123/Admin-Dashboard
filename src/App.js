import React from 'react'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css'
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
const App = () => {
    return (
        <Router>
            <Topbar />
            <div className='container'>
                <Sidebar />
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<User />} />
                <Route path="/newProduct" element={<NewUser />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
