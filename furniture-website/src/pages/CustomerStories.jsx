import React, { useState } from 'react';
import Image1 from '../components/assets/photo-1.avif';
import Image2 from '../components/assets/photo-2.avif'; // Add your second image here
import Image3 from '../components/assets/photo-3.avif'; // Add your third image here

const CustomerStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const stories = [
    {
      image: Image1,
      testimonial: "Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
      name: "Judith Black",
      position: "CEO of Workcation",
    },
    {
      image: Image2,
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
      name: "John Doe",
      position: "Founder of Startup Co.",
    },
    {
      image: Image3,
      testimonial: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
      name: "Jane Smith",
      position: "Manager at Business Corp.",
    },
  ];

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl md:text-4xl font-sans-extrabold mb-8 text-gray-800 text-center">Customer Stories</h2>
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
            width: '100%', 
            maxWidth: '800px',  // Limit the width for desktop view
            height: 'auto' 
          }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 px-2 md:px-4"
              style={{ flex: '0 0 100%' }}
            >
              <div className="flex flex-col lg:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="lg:w-1/2">
                  <img 
                    src={story.image} 
                    alt="Profile Image" 
                    className="object-cover w-full h-52 lg:h-80" 
                  />
                </div>
                <div className="lg:w-1/2 bg-gray-800 flex items-center p-4 md:p-6 sm:px-6 sm:py-8">
                  <div>
                    <p className="text-white text-sm md:text-lg font-medium mb-4">
                      {story.testimonial}
                    </p>
                    <p className="text-white font-bold">
                      {story.name}
                    </p>
                    <p className="text-gray-400">
                      {story.position}
                    </p>
                  </div>
                </div>
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

      <div className="text-center mt-8">
        {/* You can add indicators or other components here if needed */}
      </div>
    </div>
  );
};

export default CustomerStories;
