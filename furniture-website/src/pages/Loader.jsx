import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
