import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa'; // Import the clock icon
import BackGroundImage from '../components/assets/furniture3.jpg';
import SofaImage from '../components/assets/sofa1.jpg';
import BedImage from '../components/assets/bed.jpg';
import CabinetImage from '../components/assets/cabinet1.jpg';
import MattressImage from '../components/assets/mattress.png'; 
import ADImage from '../components/assets/AD.png';
import CategoryCarousel from './CategoryCarousel';
import Loader from './Loader';
import CustomerStories from './CustomerStories';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen w-full overflow-hidden">
      <HeroSection />
      <MattressManiaSection />
      <ADSection />
      <ProductSection />
      <CategorySection />
      <CustomerStories />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section 
      className="bg-cover bg-center h-96 md:h-[50vh] lg:h-[60vh] xl:h-[70vh] text-white flex items-center justify-center relative w-full px-4 md:px-8"  
      style={{ backgroundImage: `url(${BackGroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 w-full"></div>
      <div className="relative z-10 text-center w-full max-w-2xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-haveltica-extrabold mb-4 md:mb-6 leading-tight tracking-wide">Welcome to Furniture Shop</h1>
        <p className="text-1xl md:text-xl lg:text-2xl mb-8 md:mb-10 font-sans-light tracking-wide">Find the perfect furniture for your home</p>
        <Link to="/shop-now">
          <button className="bg-blue-500 hover:bg-blue-600 text-1xl-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-200 ease-in-out">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};



const MattressManiaSection = () => {
  return (
    <section className="py-10 md:py-16 bg-white w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans-serif font-bold text-gray-900 mb-8 md:mb-12 tracking-tight"></h2>
        <Link to="/mattress-mania">
          <img 
            src={MattressImage} 
            alt="Mattress Mania" 
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
    </section>
  );
};

const ADSection = () => {
  return (
    <section className="py-1 md:py-6 bg-white w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-sans-serif font-bold text-gray-900 mb-8 md:mb-12 tracking-tight">Gain Credits</h2>
        <Link to="/mattress-mania">
          <img 
            src={ADImage} 
            alt="AD" 
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
    </section>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex items-center h-20 justify-center space-x-2 text-red-600 font-bold text-lg-2xl">
      <FaClock />
      <span>
        Ending in {timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s
      </span>
    </div>
  );
};

const ProductSection = () => {
  const dealEndDate = new Date();
  dealEndDate.setHours(dealEndDate.getHours() + 5); // Deal ends in 5 hours

  return (
    <section className="py-10 md:py-16 bg-gray-300 w-full">
      <div className="container mx-auto px-4">
        <CountdownTimer targetDate={dealEndDate} />
        <h2 className="text-2xl md:text-4xl lg:text-3xl font-sans-serif font-bold text-center text-gray-900 mb-12 md:mb-16 tracking-tight">Our Products</h2>
        <div className="grid font-sans grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            name="Elegant Sofa" 
            image={SofaImage} 
            description="(Camel Italian Leather) Comfort meets style with this elegant sofa, perfect for any living room."
          />
          <ProductCard 
            name="Boston Wood Compact Size Bed" 
            image={BedImage} 
            description="A cozy and compact bed crafted from fine Boston wood."
          />
          <ProductCard 
            name="Hubert 6-Door Kitchen Cabinet" 
            image={CabinetImage} 
            description="Organize your kitchen with the spacious Hubert 6-Door Cabinet."
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl transform hover:-translate-y-1 duration-300">
      <img src={image} alt={name} className="w-full h-60 object-cover"/>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2 text-gray-800">{name}</h1>
        <p className="text-sm text-gray-500 font-roboto-extrabold mb-3">{description}</p>
        <div className="flex space-x-4">
        <Link to="/contact-us">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-110">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};




const CategorySection = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-200 w-full">
      <div className="container bg-gray-200 mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12 tracking-tight">Explore by Categories</h2>
        <CategoryCarousel />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10 md:py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
       
        <div>
          <h2 className="font-bold text-lg mb-2">Our Business Network</h2>
          <p className="text-sm mb-4">Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials and a lot more.</p>
          <a href="#" className="text-sm text-blue-500 underline">See more</a>
         
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Our Family</h2>
          <ul className="text-sm">
            
            <li><a href="#" className="block text-white hover:text-gray-800">Join our Family</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Member offers</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Workshops & Events</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Services</h2>
          <ul className="text-sm">
            <li><a href="#" className="block text-white hover:text-gray-800">Delivery Service</a></li>
            
            <li><a href="#" className="block text-white hover:text-gray-800">Design your room</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Assembly Service</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Measuring Service</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Kitchen Planning</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Installation Service</a></li>
           
            <li><a href="#" className="block text-white hover:text-gray-800">Customer Service</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Recycle Program</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Help</h2>
          <ul className="text-sm">
            <li><a href="#" className="block text-white hover:text-gray-800">How to shop</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Return policy</a></li>
           
            <li><a href="#" className="block text-white hover:text-gray-800">Contact us</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">FAQ's</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Size guide - Beds</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Size guide - Mattresses</a></li>
            <li><a href="#" className="block text-white hover:text-gray-800">Size guide - Pillows</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-white mt-10">
        <p>&copy; {new Date().getFullYear()} Furniture Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Homepage;
