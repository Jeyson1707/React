import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaHeart, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import WardrobesImage from '../components/assets/wardrobes.avif';
import DiningFurnitureImage from '../components/assets/dining-furniture.avif';
import ChildrenFurnitureImage from '../components/assets/childrens-small-furniture.avif';
import OutdoorFurnitureImage from '../components/assets/outdoor-furniture.avif';
import GamingFurniture from '../components/assets/gaming-furniture.avif';
import SofasImage from '../components/assets/sofas1.avif';
import TableImage from '../components/assets/tables-furniture.avif';
import BedsImage from '../components/assets/bed2.avif';
import FurnitureSets from '../components/assets/furniture-sets.webp';
import BookcasesImage from '../components/assets/bookshelf.webp';
import KitchenCabinetImage from '../components/assets/cabinet1.avif';

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const toggleMoreMenu = () => {
    setIsMoreOpen(!isMoreOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};


  const toggleRoomsMenu = () => {
    setIsRoomsOpen(!isRoomsOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  const [isProductsOpen, setIsProductsOpen] = useState(false);

const toggleProductsMenu = () => {
  setIsProductsOpen(!isProductsOpen);
};

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsSidebarOpen(false);
    }
  };

  return (
    <nav className="bg-gray-200 text-gray-800 shadow-md relative z-50 font-sans">
      {/* Top Navbar */}
      <div className="bg-gray-100 container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-black font-bold text-1xl md:text-2xl font-poppins tracking-wide"
        >
          Furniture Shop
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-4 hidden lg:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-900 text-sm"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors duration-300">
              <FaSearch className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Icons for Wishlist, Heart, User, and Hamburger Menu for Mobile */}
        <div className="flex items-center space-x-0.2 lg:space-x-4">
  <Link to="/wishlist">
    <button className="text-black focus:outline-none p-2 rounded-full hover:bg-gray-300 transition-colors duration-0">
      <FaHeart className="w-4 h-4 lg:w-5 lg:h-5" />
    </button>
  </Link>
  <Link to="/profile">
    <button className="text-black focus:outline-none p-2 rounded-full hover:bg-gray-300 transition-colors duration-0">
      <FaUser className="w-4 h-4 lg:w-5 lg:h-5" />
    </button>
  </Link>
          <button
            onClick={toggleSearch}
            className="text-black focus:outline-none p-2 rounded-full lg:hidden hover:bg-gray-300 transition-colors duration-0"
          >
            <FaSearch className="w-4 h-4" />
          </button>
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none p-2 rounded-full lg:hidden hover:bg-gray-300 transition-colors duration-0"
          >
            {isSidebarOpen ? (
              <FaTimes className="w-4 h-4" />
            ) : (
              <FaBars className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="p-4 px-4 pb-4 lg:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-900 text-sm"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors duration-300">
              <FaSearch className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-gray transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full text-gray'
        } transition-transform duration-300 ease-in-out z-50 shadow-lg lg:hidden`}
      >
        <div className=" text-black px-4 py-5">
          {/* Logo in Sidebar */}
          <Link
            to="/"
            className="bg-gray-800 text-white w-full p-2 pl-8 pr-40 full font-bold text-1.5xl font-poppins tracking-wide hover:bg-gray-700 transition-colors duration-300"
            onClick={toggleSidebar}
          >
            Menu
          </Link>

          {/* Sidebar Links */}
          <ul className="mt-6 space-y-4">
          <li>
          <button
  onClick={toggleProductsMenu}
  className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors duration-300 focus:outline-none"
>
  <span>Shop products</span>
  <FaChevronDown
    className={`ml-2 transform transition-transform duration-200 ${
      isDropdownOpen ? 'rotate-180' : ''
    }`}
  />
</button>
  {isProductsOpen && (
    <ul className="absolute bg-white shadow-lg mt-2 rounded-md space-y-2">
      {[
        'Sofas & Seatings',
        'Matresses',
        'Home Decor',
        'Furnishings',
        'Lamps & Lighting',
        'Kitchen & Dining',
      ].map((product, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100">
          <Link
            to={`/${product.toLowerCase().replace(/ /g, '-')}`}
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            {product}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>


            {/* Shop by Rooms Accordion */}
            <li>
              <button
                onClick={toggleRoomsMenu}
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors duration-300 focus:outline-none"
              >
                Shop by Rooms
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-200 ${
                    isRoomsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isRoomsOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  {[
                    'Living Room',
                    'Bedroom',
                    'Office Rooms',
                    'Kitchen',
                    "Children's Room",
                    'Outdoor',
                  ].map((room, index) => (
                    <li key={index}>
                      <Link
                        to={`/${room.toLowerCase().replace(/ /g, '-')}`}
                        className="block text-gray-600 hover:text-black transition-colors duration-300"
                        onClick={toggleSidebar}
                      >
                        {room}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/offers"
                className="block text-gray-700 hover:text-black transition-colors duration-300"
                onClick={toggleSidebar}
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                to="/new-at-ours"
                className="block text-gray-700 hover:text-black transition-colors duration-300"
                onClick={toggleSidebar}
              >
                New at Ours
              </Link>
            </li>
            <li>
              <Link
                to="/business"
                className="block text-gray-700 hover:text-black transition-colors duration-300"
                onClick={toggleSidebar}
              >
                Ours for Business
              </Link>
            </li>
            <li>
              <Link
                to="/customer-service"
                className="block text-gray-700 hover:text-black transition-colors duration-300"
                onClick={toggleSidebar}
              >
                Customer Service
              </Link>
            </li>
             {/* More Accordion */}
             <li>
              <button
                onClick={toggleMoreMenu}
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors duration-300 focus:outline-none"
              >
                More
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-200 ${
                    isMoreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMoreOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  {['Contact Us', 'Store Locator', 'Careers', 'Blog'].map(
                    (item, index) => (
                      <li key={index}>
                        <Link
                          to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                          className="block text-gray-600 hover:text-black transition-colors duration-300"
                          onClick={toggleSidebar}
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="container mx-auto hidden lg:flex items-center justify-between py-4 px-4 lg:px-6">
        <ul className="flex-grow flex justify-around space-x-4">
        <li>
        <button
  onClick={toggleProductsMenu}
  className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors duration-300 focus:outline-none"
>
  <span>Shop products</span>
  <FaChevronDown
    className={`ml-2 transform transition-transform duration-200 ${
      isDropdownOpen ? 'rotate-180' : ''
    }`}
  />
</button>

  {isProductsOpen && (
    <ul className="absolute bg-white shadow-lg mt-2 rounded-md space-y-2">
      {[
        'Sofas & Seatings',
        'Matresses',
        'Home Decor',
        'Furnishings',
        'Lamps & Lighting',
        'Kitchen & Dining',
      ].map((product, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100">
          <Link
            to={`/${product.toLowerCase().replace(/ /g, '-')}`}
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            {product}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>

          <li>
            <button
              onClick={toggleRoomsMenu}
              className="flex items-center text-gray-700 hover:text-black transition-colors duration-300"
            >
              Shop by Rooms
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-200 ${
                  isRoomsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isRoomsOpen && (
              <ul className="absolute bg-white shadow-lg mt-2 rounded-md space-y-2">
                {[
                  'Living Room',
                  'Bedroom',
                  'Office Rooms',
                  'Kitchen',
                  "Children's Room",
                  'Outdoor',
                ].map((room, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      to={`/${room.toLowerCase().replace(/ /g, '-')}`}
                      className="text-gray-700 hover:text-black transition-colors duration-300"
                    >
                      {room}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/offers"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              Offers
            </Link>
          </li>
          <li>
            <Link
              to="/new-at-ours"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              New at Ours
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              Ours for Business
            </Link>
          </li>
          <li>
            <Link
              to="/customer-service"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              Customer Service
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white text-gray-800 py-4 shadow-md">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="flex space-x-14 overflow-x-auto py-1">
      {[
        
        {
          img: GamingFurniture,
          label: 'Gaming furniture',
          link: '/Gaming-furniture',
        },
        { img: SofasImage, label: 'Sofas', link: '/Sofas' },
        { img: TableImage, label: 'Tables', link: '/Tables' },
        {
          img: FurnitureSets,
          label: 'Furniture sets',
          link: '/Furniture-sets',
        },
        { img: BedsImage, label: 'Beds', link: '/Beds' },
        { img: BookcasesImage, label: 'Bookcases', link: '/Bookcases' },
        {
          img: KitchenCabinetImage,
          label: 'Cabinets',
          link: '/Cabinets',
        },
        {
          img: OutdoorFurnitureImage,
          label: 'Outdoor-Furniture',
          link: '/Outdoor-Furniture',
        },
       
        {
          img: WardrobesImage,
          label: 'Wardrobes',
          link: '/Wardrobes',
        },
        {
          img: DiningFurnitureImage,
          label: 'Dining-Furniture',
          link: '/Diningfurniture',
        },
        {
          img: ChildrenFurnitureImage,
          label: "Children's Furniture",
          link: "/Children's-furniture",
        },
      ].map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="flex-shrink-0 flex flex-col items-center text-sm group"
        >
          <div className="w-24 h-20 overflow-hidden mb-2">
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  </div>
</div>
    </nav>
  );
};

export default Navbar;
