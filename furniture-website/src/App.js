import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import TemporaryPage from './pages/TemporaryPage.jsx';
import HomePage from './pages/Homepage.jsx'; // Assuming you have a HomePage component
import ShopNowPage from './pages/ShopNowPage.jsx';
import CategoryCarousel from './pages/CategoryCarousel.jsx';
import DiningSetsPage from './pages/DiningSetsPage.jsx';
import ExtendableTablesPage from './pages/ExtendableTablesPage.jsx';
import TrolleyPage from './pages/TrolleyPage.jsx';
import StoolsPage from './pages/StoolsPage.jsx';
import WorkDesksPage from './pages/WorkDesksPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx';
import UserProfilePage from './pages/UserProfilePage.jsx';
import ContactUs from './pages/ContactUs.jsx';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/:page" element={<TemporaryPage />} />
        <Route path="/category/:page" element={<TemporaryPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-now" element={<ShopNowPage />} />
        <Route path="/" element={<CategoryCarousel />} />
        <Route path="/dining-sets" element={<DiningSetsPage />} />
        <Route path="/extendable-tables" element={<ExtendableTablesPage />} />
        <Route path="/trolleys" element={<TrolleyPage />} />
        <Route path="/stools" element={<StoolsPage />} />
        <Route path="/work-desks" element={<WorkDesksPage />} />
        <Route path="/wishlist" component={<WishlistPage/>} />
        <Route path="/profile" component={<UserProfilePage/>} />
        <Route path="/contact-us" component={<ContactUs/>} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
