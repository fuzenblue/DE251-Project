import React from 'react';
import { useParams } from 'react-router-dom';

const BlogInfo = () => {
  const { id } = useParams(); // Get the blog ID from the URL

  // Dummy data for articles
  const articles = {
    1: {
      title: "The Complete Guide to Growing Sweet Pineapples",
      heroImage: "/article-1.jpg",
      steps: [
        {
          title: "Step 1: Choose the Right Pineapple Crown",
          description:
            "Start with a healthy pineapple crown from a ripe fruit. Make sure to remove the lower leaves and allow the base to dry for a few days before planting.",
          image: "/article-1-1.jpg",
        },
        {
          title: "Step 2: Prepare the Soil",
          description:
            "Pineapples thrive in well-draining soil with a slightly acidic pH (4.5 to 6.5). Add organic compost to enrich the soil before planting.",
          image: "/article-1-2.jpg",
        },
        {
          title: "Step 3: Plant and Water",
          description:
            "Plant the pineapple crown in the soil, ensuring the base is fully covered. Water it lightly but consistently. Avoid overwatering as pineapples are drought-tolerant plants.",
          image: "/article-1-3.jpg",
        },
      ],
      video: "/article-1-video.mp4",
    },
    // Add more articles for other IDs if needed
  };

  const article = articles[id];

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Step-by-Step Guide
        </h2>
        {article.steps.map((step, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">
              {step.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {step.description}
            </p>
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-64 object-cover rounded-md mt-4"
            />
          </div>
        ))}

        {article.video && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Watch the Full Tutorial
            </h2>
            <video controls className="w-full rounded-md">
              <source src={article.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 Pineapple Farming Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogInfo;
