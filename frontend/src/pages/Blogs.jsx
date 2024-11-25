import React from "react";
import { Link } from "react-router-dom";
import { fame } from "../assets/fame"; // ตรวจสอบให้แน่ใจว่า path นี้ถูกต้อง

const Blogs = () => {
  // Blog articles data
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Growing Sweet Pineapples",
      description: "Master the art of growing delicious pineapples with our comprehensive guide...",
      date: "October 20, 2024",
      image: fame.blogs_pic2, // ตัวอย่างรูปภาพบทความ
      images: [fame.blogs_pic1_1, fame.blogs_pic1_4, fame.blogs_pic2_1],
      video: fame.blogs_video1,
    },
    {
      id: 2,
      title: "Sustainable Practices in Modern Pineapple Farming",
      description: "Discover how sustainable farming methods are revolutionizing pineapple cultivation...",
      date: "October 18, 2024",
      image: fame.blogs_pic1,
      images: [fame.blogs_pic2_2, fame.blogs_pic2_3],
    },
    {
      id: 3,
      title: "Health Benefits of Fresh Pineapples",
      description: "Learn about the amazing health benefits packed in every pineapple...",
      date: "October 15, 2024",
      image: fame.blogs_pic3,
      images: [fame.blogs_pic3_3, fame.blogs_pic3_2],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-12">
        <div className="absolute inset-0">
          <img
            src={fame.blogs_head1}
            alt="Pineapples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-orange-500">Pineapple</span> Farming Blog
          </h1>
          <p className="mt-4 text-xl text-white">
            Your guide to pineapple cultivation and more
          </p>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold">{article.title}</h3>
            <p className="mt-2 text-gray-600">{article.description}</p>
            <p className="mt-2 text-sm text-gray-500">{article.date}</p>
            <Link
              to={`/blogs/${article.id}`}
              className="text-orange-500 mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Photo Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) =>
            article.images.map((image, index) => (
              <div key={`${article.id}-${index}`} className="relative group">
                <img
                  src={image}
                  alt={`${article.title} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-white font-semibold text-lg">{article.title}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
