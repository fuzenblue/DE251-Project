import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Growing Sweet Pineapples",
      description: "Master the art of growing delicious pineapples with our comprehensive guide...",
      date: "October 20, 2024",
      image: "/article-1.jpg",
      images: [
        "/article-1-1.jpg", "/article-1-2.jpg", "/article-1-3.jpg"
      ],
      video: "/article-1-video.mp4"
    },
    {
      id: 2,
      title: "Sustainable Practices in Modern Pineapple Farming",
      description: "Discover how sustainable farming methods are revolutionizing pineapple cultivation...",
      date: "October 18, 2024",
      image: "/article-2.jpg",
      images: [
        "/article-2-1.jpg", "/article-2-2.jpg"
      ],
    },
    {
      id: 3,
      title: "Health Benefits of Fresh Pineapples",
      description: "Learn about the amazing health benefits packed in every pineapple...",
      date: "October 15, 2024",
      image: "/article-3.jpg",
      images: [
        "/article-3-1.jpg", "/article-3-2.jpg"
      ],
    }
  ];

  const articleId = useParams().articleId;
  const article = articles.find(a => a.id === parseInt(articleId));

  const renderVideo = () => {
    if (article?.video) {
      return (
        <div className="video-container w-full h-96 mb-8">
          <video className="w-full h-full object-cover rounded-md" controls>
            <source src={article.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return null;
  };

  const renderCarousel = () => {
    if (article?.images) {
      return (
        <div className="carousel-container w-full mb-8">
          <div className="relative">
            <img
              src={article.images[activeIndex]}
              alt={article.title}
              className="w-full h-96 object-cover rounded-md"
            />
            {/* Navigation Dots */}
            <div className="absolute inset-x-0 bottom-2 flex justify-center space-x-2">
              {article.images.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
          {/* Previous and Next Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={() => setActiveIndex(prev => (prev === 0 ? article.images.length - 1 : prev - 1))}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={() => setActiveIndex(prev => (prev === article.images.length - 1 ? 0 : prev + 1))}
          >
            ❯
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-12">
        <div className="absolute inset-0">
          <img
            src="/hero-pineapples.jpg"
            alt="Pineapples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-orange-500">Pineapple</span> Farming Blog
          </h1>
          <p className="mt-4 text-xl text-white">Your guide to pineapple cultivation and more</p>
          <div className="mt-8">
            <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
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

      {/* Blog List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-2xl font-semibold">{article.title}</h3>
            <p className="mt-2 text-gray-600">{article.description}</p>
            <p className="mt-2 text-sm text-gray-500">{article.date}</p>
            <Link to={`/blogs/${article.id}`} className="text-orange-500 mt-4 inline-block">Read More</Link>
          </div>
        ))}
      </div>

      {/* Single Article View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">{article?.title}</h2>
        <div className="space-y-8">
          {renderVideo()}
          {renderCarousel()}
          <p className="text-gray-600 text-lg">{article?.description}</p>
          <p className="mt-4 text-sm text-gray-500">{article?.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
  