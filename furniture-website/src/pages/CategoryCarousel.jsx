import React, { useState } from 'react';
import DiningSets from '../components/assets/DiningSets1.jpg';
import ExtendableTable from '../components/assets/ExtendableTable1.jpg';
import Trolley from '../components/assets/Trolley1.jpg';
import Stools from '../components/assets/Stools.avif';
import WorkDesks from '../components/assets/WorkDesks1.jpg';

const categories = [
  { name: 'Dining sets', image: DiningSets },
  { name: 'Extendable tables', image: ExtendableTable },
  { name: 'Trolleys', image: Trolley },
  { name: 'Stools', image: Stools },
  { name: 'Work desks', image: WorkDesks },
];

const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl md:text-3xl font-sans-extrabold mb-8 text-gray-800 text-center">Top Category Picks</h2>
      <hr className="w-16 border-blue-500 mx-auto mb-6" />

      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-3xl text-gray-400 hover:text-gray-600 focus:outline-none z-10 bg-gray-800 hover:bg-gray-600 p-2 rounded-full transition-colors duration-300"
        >
          &#8249;
        </button>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`, 
            width: `${categories.length * 100}%`, 
            maxWidth: '100%'  // Ensure the carousel fits within its container
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2 md:px-4"
              style={{ flex: '0 0 100%' }}
            >
              <div className="flex flex-col items-center p-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-72 h-72 object-cover rounded-lg shadow-lg"
                />
                <p className="text-center mt-4 text-lg font-medium">{category.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 text-3xl text-gray-400 hover:text-gray-600 focus:outline-none z-10 bg-gray-800 hover:bg-gray-600 p-2 rounded-full transition-colors duration-300"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
