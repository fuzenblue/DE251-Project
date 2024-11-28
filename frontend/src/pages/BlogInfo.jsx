import React, { useState } from "react";
import { fame } from "../assets/fame";

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Growing Sweet Pineapples",
      description: "Master the art of growing delicious pineapples with our comprehensive guide...",
      date: "October 20, 2024",
      image: fame.blogs_pic2,
      steps: [
        {
          title: "Step 1: Choose the Right Pineapple Crown",
          description:
            "Start with a healthy pineapple crown from a ripe fruit. Make sure to remove the lower leaves and allow the base to dry for a few days before planting.",
          image: fame.blogs_pic2_2,
        },
        {
          title: "Step 2: Prepare the Soil",
          description:
            "Pineapples thrive in well-draining soil with a slightly acidic pH (4.5 to 6.5). Add organic compost to enrich the soil before planting.",
          image: fame.blogs_soil,
        },
        {
          title: "Step 3: Plant and Water",
          description:
            "Plant the pineapple crown in the soil, ensuring the base is fully covered. Water it lightly but consistently. Avoid overwatering as pineapples are drought-tolerant plants.",
          image: fame.blogs_pic1_4,
        },
      ],
      video: "https://www.youtube.com/embed/qoJY_GwXIwI?si=HLl6_hWMur1QG7dj",
    },
    {
      id: 2,
      title: "Sustainable Practices in Modern Pineapple Farming",
      description: "Discover how sustainable farming methods are revolutionizing pineapple cultivation...",
      date: "October 18, 2024",
      image: fame.blogs_pic1,
      steps: [
        {
          title: "Step 1: Organic Fertilizers",
          description:
            "Learn the importance of using organic fertilizers to maintain soil health and reduce environmental impact.",
          image: fame.blogs_pic2_1,
        },
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedArticle ? (
          // Expanded view of selected article
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => setSelectedArticle(null)}
              className="mb-4 text-orange-500 hover:underline"
            >
              Back to All Blogs
            </button>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold">{selectedArticle.title}</h3>
            <p className="mt-2 text-gray-600">{selectedArticle.date}</p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4">Steps:</h4>
              {selectedArticle.steps.map((step, index) => (
                <div key={index} className="mb-6">
                  <h5 className="text-lg font-semibold">{step.title}</h5>
                  <p className="text-gray-700">{step.description}</p>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg mt-2"
                  />
                </div>
              ))}
            </div>
            {selectedArticle.video && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Watch the Full Tutorial
                </h2>
                <div className="relative" style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                  <iframe
                    src={selectedArticle.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Blog Cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-2xl font-semibold">{article.title}</h3>
                <p className="mt-2 text-gray-600">{article.description}</p>
                <p className="mt-2 text-sm text-gray-500">{article.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
