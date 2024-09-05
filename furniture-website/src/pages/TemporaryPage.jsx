import React from 'react';
import { useParams } from 'react-router-dom';

const TemporaryPage = () => {
  const { page } = useParams();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">You've reached {page.replace(/-/g, ' ')} page</h1>
      <p className="text-center mt-4">This is a temporary page. The content will be added soon.</p>
    </div>
  );
};

export default TemporaryPage;
