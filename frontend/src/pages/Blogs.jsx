import React from 'react';

const SearchIcon = () => (
  <svg 
    className="h-5 w-5 text-gray-400" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Growing Sweet Pineapples",
      description: "Master the art of growing delicious pineapples with our comprehensive guide...",
      date: "October 20, 2024",
      image: "/article-1.jpg"
    },
    {
      id: 2,
      title: "Sustainable Practices in Modern Pineapple Farming",
      description: "Discover how sustainable farming methods are revolutionizing pineapple cultivation...",
      date: "October 18, 2024",
      image: "/article-2.jpg"
    },
    {
      id: 3,
      title: "Health Benefits of Fresh Pineapples",
      description: "Learn about the amazing health benefits packed in every pineapple...",
      date: "October 15, 2024",
      image: "/article-3.jpg"
    }
  ];

  const galleryImages = [
    { id: 1, src: "/gallery-1.jpg", alt: "Sliced pineapple" },
    { id: 2, src: "/gallery-2.jpg", alt: "Pineapple juice" },
    { id: 3, src: "/gallery-3.jpg", alt: "Pineapple farming" },
    { id: 4, src: "/gallery-4.jpg", alt: "Fresh pineapples" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/hero-pineapples.jpg" 
            alt="Pineapples" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            <span className="text-orange-500">Pineapple</span>
            <span className="text-white"> Farming Blog</span>
          </h1>
          <p className="mt-4 text-xl text-white">
            Your guide to pineapple cultivation and more
          </p>
          <div className="mt-8">
            <div className="max-w-xl bg-white rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-3">
                <SearchIcon />
                <input 
                  type="text" 
                  placeholder="Search article..." 
                  className="ml-2 flex-1 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Latest Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-48 h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p className="mt-2 text-gray-600">{article.description}</p>
                  <p className="mt-4 text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;