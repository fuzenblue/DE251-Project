import React, { useState } from "react";
import { fame } from "../assets/fame";
import LazyLoad from "react-lazyload";

<LazyLoad height={200}>
  <img src="path/to/image.jpg" alt="description" />
</LazyLoad>;

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Growing Sweet Pineapples",
      description: "Master the art of growing delicious pineapples with our comprehensive guide! Whether you're a seasoned gardener or a beginner, cultivating pineapples can be a rewarding and enjoyable experience.",
      date: "October 20, 2024",
      image: fame.blogs_1,
      descriptions: [ // เปลี่ยนจาก 'steps' เป็น 'descriptions'
        {
          title: "Step 1: Choose the Right Pineapple Crown",
          description:
            "Start with a healthy pineapple crown from a ripe fruit. Make sure to remove the lower leaves and allow the base to dry for a few days before planting.",
        },
        {
          title: "Step 2: Prepare the Soil",
          description:
            "Pineapples thrive in well-draining soil with a slightly acidic pH (4.5 to 6.5). Add organic compost to enrich the soil before planting.",
        },
        {
          title: "Step 3: Plant and Water",
          description:
            "Plant the pineapple crown in the soil, ensuring the base is fully covered. Water it lightly but consistently. Avoid overwatering as pineapples are drought-tolerant plants.",
        },
      ],
    },
    {
      id: 2,
      title: "Pineapple Farming: Sustainable Practices for a Sweet Future",
      description: `Pineapple farming has long been associated with environmental challenges, particularly due to its high water requirements, the use of pesticides, and the large-scale monoculture farming practices.`,
      date: "October 18, 2024",
      image: fame.blogs_2,
      descriptions: [
        {
          title: "Step 1: Organic Fertilizers and Soil Health",
          description:
            "The use of organic fertilizers is a cornerstone of sustainable pineapple farming. Unlike synthetic fertilizers, organic alternatives help maintain healthy soil, improve its structure, and reduce harmful runoff. These fertilizers are made from natural materials, such as compost or animal manure, which enrich the soil and support the growth of beneficial microorganisms.",
          
        },
        {
          title: "Step 2: Water Conservation and Drip Irrigation",
          description:
            "Water is a precious resource, and traditional irrigation methods in pineapple farming are often inefficient. To combat water scarcity, many farmers have adopted drip irrigation systems. This method allows water to be delivered directly to the roots of the plants, minimizing water wastage and ensuring that the crop receives consistent moisture. Drip irrigation has been proven to increase water use efficiency by up to 50%.",
          
        },
        {
          title: "Step 3: Biological Pest Control",
          description:
            "In traditional pineapple farming, chemical pesticides are often used to control pests. However, these chemicals can harm the environment and human health. Biological pest control methods, such as introducing beneficial insects or using natural predators, offer a safer, eco-friendly alternative. These methods not only protect the crops but also promote biodiversity by preserving beneficial organisms in the ecosystem.",
          
        },
        {
          title: "Step 4: Sustainable Packaging Solutions",
          description:
            "Plastic waste is a significant issue in the agricultural industry, including pineapple farming. To address this, many farmers are opting for sustainable packaging solutions, such as biodegradable materials or reusable containers. By eliminating the use of single-use plastics, sustainable packaging reduces the environmental footprint of pineapple distribution and helps combat plastic pollution in the oceans.",
          
        },
        {
          title: "The Benefits of Sustainable Pineapple Farming",
          description:
            "The adoption of sustainable practices in pineapple farming offers numerous benefits. Firstly, it reduces the environmental impact by using fewer chemicals, conserving water, and promoting soil health. Secondly, it leads to higher-quality, healthier pineapples by reducing exposure to harmful substances. Finally, sustainable farming practices contribute to improved resilience, allowing farmers to better cope with the challenges posed by climate change.",
          
        },
  
        
      ],
    },
    {
      id: 3,
      title: "Pineapple Coconut Mock-tail",
      description: `This tropical Pineapple Coconut Mock-tail is the perfect refreshing drink.`,
      date: "October 25, 2024",
      image: fame.blogs_3 ,  // You can change this image if you want to match a mock-tail picture
      descriptions: [
        {
          title: "Ingredients",
          description:
            "To make this tropical mock-tail, you will need the following ingredients:",
          
        },
        {
          title: "Recipe",
          description: `1. 4 oz Coconut Water\n2. 3 oz Pineapple Juice\n3. 1 oz Grapefruit Juice\n4. Ice\n\nGarnish: Grapefruit wedge or mint leaves.\n\nInstructions: In a glass, add coconut water, pineapple juice, and grapefruit juice, then fill with ice. Mix together and garnish with a grapefruit wedge or fresh mint. Enjoy this refreshing drink on a hot day or as a refreshing mocktail for any occasion!`,
          
        },
        {
          title: "Want to Spike This Mock-tail?",
          description:
            "For those who like it with a kick, you can easily spike this mock-tail with tequila, vodka, or rum. The tropical flavors will blend perfectly with these spirits, making for an even more refreshing cocktail experience.",
          
        },
        {
          title: "Cheers!",
          description:
            "Enjoy your Pineapple Coconut Mock-tail! Whether you're serving it at a party or just relaxing, this drink will definitely bring a tropical vibe to your day. Xoxo, cheers!",
          
        },
      ],
    },
    {
      id: 4,
      title: "How to Make Pineapple Jam at Home",
      description: `Making homemade pineapple jam is a fun and rewarding experience. It’s a great way to preserve the sweetness of pineapples, and you can use it in various dishes like toast, desserts, or even as a filling for pastries. In this article, I’ll walk you through the process of making pineapple jam at home from scratch.`,
      date: "October 28, 2024",
      image: fame.blogs_4,
      descriptions: [
        {
          title: "Ingredients",
          description:
            "To make this homemade pineapple jam, you will need the following ingredients:",
          
        },
        {
          title: "Recipe",
          description: `1. 4 ripe pineapples\n2. 1 ½ cups of sugar\n3. 1 tbsp lemon juice\n4. 1 tbsp pectin (optional for thicker consistency)\n\nInstructions: Peel and chop the pineapples. Add them to a large pot and cook over medium heat. Add sugar and stir to combine. Cook until the mixture thickens, and add lemon juice and pectin. Stir occasionally. Once the jam has reached the desired consistency, pour it into sterilized jars and store it in the refrigerator.`,
          
        },
        {
          title: "Tips for a Perfect Jam",
          description:
            "For an extra burst of flavor, you can add a pinch of cinnamon or vanilla extract to the mix. Make sure the pineapple is ripe enough for a sweet jam, and keep an eye on the cooking process to avoid burning the mixture.",
          
        },
        {
          title: "Enjoy Your Homemade Jam!",
          description:
            "Once your pineapple jam is ready, spread it on toast, use it as a topping for desserts, or enjoy it with cheese for a sweet and savory combo.",
          
        },
      ],
    },
    {
      id: 5,
      title: "The History of Pineapple in Global Cuisine",
      description: `Pineapple, once considered an exotic luxury fruit, has become a staple in kitchens around the world. But where did it come from, and how did it make its way into so many dishes? Let’s take a journey through time to understand the history of pineapple in global cuisine.`,
      date: "October 30, 2024",
      image: fame.blogs_5,
      descriptions: [
        {
          title: "The Origins of Pineapple",
          description:
            "Pineapple is native to South America, specifically the area around modern-day Brazil and Paraguay. It was first domesticated by indigenous people and later spread to the Caribbean and Central America. European explorers introduced it to Europe in the late 15th century, where it was initially grown in greenhouses due to its tropical nature.",
          
        },
        {
          title: "Pineapple in European Cuisine",
          description:
            "In the 17th and 18th centuries, pineapples were a symbol of wealth and were often used as a decoration for elaborate feasts. The fruit became so prized that it was often carried around as a gift. Over time, European cuisine began incorporating pineapples into savory dishes, desserts, and beverages.",
          
        },
        {
          title: "Pineapple's Rise in Asian Cuisine",
          description:
            "Pineapple was brought to Asia in the 19th century, and it became an essential ingredient in many traditional dishes. In countries like Thailand and the Philippines, pineapple is used in curries, salads, and desserts. It also features heavily in tropical drinks and snacks.",
          
        },
        {
          title: "The Pineapple Today",
          description:
            "Today, pineapple is used in everything from savory salsas to smoothies, and it is an important part of many tropical dishes. The versatility of the fruit, along with its sweet and tangy flavor, has made it a favorite ingredient in both home kitchens and professional kitchens around the world.",
          
        },
      ],
    },
    {
      id: 6,
      title: "Pineapple in Smoothies: 3 Delicious Recipes",
      description: `Pineapple adds a sweet, tropical flair to smoothies. It's the perfect addition to a healthy breakfast or snack. In this article, I’ll share three delicious pineapple smoothie recipes that will help you beat the heat and enjoy a nutritious drink at the same time.`,
      date: "November 2, 2024",
      image: fame.blogs_6,
      descriptions: [
        {
          title: "Tropical Pineapple Mango Smoothie",
          description:
            "Ingredients: 1 cup pineapple chunks, 1 cup mango chunks, 1/2 banana, 1 cup coconut milk, ice.\n\nInstructions: Blend all ingredients until smooth and creamy. Serve cold for a refreshing, tropical smoothie.",
          
        },
        {
          title: "Pineapple Spinach Green Smoothie",
          description:
            "Ingredients: 1/2 cup pineapple chunks, 1 cup spinach, 1/2 banana, 1/2 cup almond milk, 1 tbsp chia seeds.\n\nInstructions: Blend all ingredients until smooth. This green smoothie is packed with nutrients and makes a great detox drink.",
          
        },
        {
          title: "Pineapple Coconut Smoothie",
          description:
            "Ingredients: 1 cup pineapple chunks, 1/2 cup coconut yogurt, 1/2 cup coconut milk, 1 tbsp shredded coconut, ice.\n\nInstructions: Blend all ingredients until smooth. This smoothie tastes like a tropical vacation in a glass.",
          
        },
        {
          title: "Enjoy Your Smoothies!",
          description:
            "These three pineapple smoothies are perfect for any time of day. Whether you're looking for a tropical kick or a healthy green boost, there's a pineapple smoothie for every taste.",
          
        },
      ],
    },
    {
      id: 7,
      title: "Pineapple in Traditional Thai Desserts",
      description: `Pineapple is a popular fruit used in many Thai desserts. Its sweet and tangy flavor pairs perfectly with traditional Thai ingredients like coconut, palm sugar, and sticky rice. In this article, we explore how pineapple is used in Thai desserts, along with a few recipes you can try at home.`,
      date: "November 5, 2024",
      image: fame.blogs_7 ,
      descriptions: [
        {
          title: "Pineapple Sticky Rice",
          description:
            "This traditional Thai dessert uses sweet pineapple chunks paired with sticky rice and coconut cream. It's simple to make and incredibly satisfying.",
          
        },
        {
          title: "Pineapple in Coconut Custard",
          description:
            "Pineapple is often added to coconut custard, creating a delicious balance of creamy sweetness and tropical freshness. This dessert is popular in Thai street food markets.",
          
        },
        {
          title: "Pineapple and Palm Sugar Jelly",
          description:
            "Another common Thai dessert is pineapple jelly, which uses fresh pineapple juice and palm sugar for a fragrant, delicate treat.",
          
        },  
        {
          title: "Try These Delicious Pineapple Desserts",
          description:
            "If you enjoy experimenting with tropical fruits, these pineapple-infused Thai desserts will transport your taste buds to a sunny paradise.",
          
        },
      ],
    },
    {
      id: 8,
      title: "Pineapple in Savory Dishes: A Flavorful Twist",
      description: `Pineapple isn’t just for sweets; it’s also an excellent addition to savory dishes! Its tangy and sweet flavor can balance out rich meats, spice up stir-fries, or even add an exciting twist to salads. In this article, we’ll explore the versatility of pineapple in savory recipes.`,
      date: "November 8, 2024",
      image: fame.blogs_8,
      descriptions: [
        {
          title: "Pineapple Fried Rice",
          description:
            "This Thai-inspired dish combines pineapple, rice, and savory ingredients like shrimp, cashews, and curry powder for a burst of flavors. It's a perfect main dish or side.",
          
        },
        {
          title: "Grilled Pineapple with Chicken",
          description:
            "Grilled pineapple can be paired with grilled chicken for a deliciously smoky-sweet meal. Serve it with a tangy barbecue sauce to elevate the flavor.",
          
        },
        {
          title: "Pineapple Salsa",
          description:
            "Pineapple salsa is a great topping for grilled meats or fish. The sweetness of the pineapple balances out the heat from jalapeños, and the cilantro adds freshness.",
        
        },
        {
          title: "Pineapple in Salad",
          description:
            "Adding pineapple to salads gives them a refreshing twist. Combine with greens, nuts, and a light vinaigrette dressing for a vibrant, tropical salad.",
          
        },
      ],
    },
    {
      id: 9,
      title: "Pineapple as a Natural Health Booster",
      description: `Pineapple is not only delicious but also packed with nutrients that can benefit your health. From boosting your immune system to aiding digestion, this tropical fruit is a natural health booster. In this article, we’ll look at the health benefits of pineapple and why you should include it in your diet.`,
      date: "November 12, 2024",
      image: fame.blogs_9,
      descriptions: [
        {
          title: "Rich in Vitamins and Minerals",
          description:
            "Pineapple is an excellent source of vitamin C, which helps boost the immune system. It also contains manganese, vitamin A, and several B vitamins.",
        
        },
        {
          title: "Aids Digestion",
          description:
            "Pineapple contains bromelain, an enzyme that helps break down proteins and improve digestion. This makes it a great natural remedy for bloating and indigestion.",
        
        },
        {
          title: "Anti-Inflammatory Benefits",
          description:
            "The bromelain in pineapple also has anti-inflammatory properties, which can help reduce swelling and pain in the body, making it beneficial for conditions like arthritis.",
       
        },
        {
          title: "Boosts Skin Health",
          description:
            "The vitamin C in pineapple also promotes healthy, glowing skin by stimulating collagen production, which keeps your skin firm and youthful.",
          
        },
      ],
    }
    
    
    
    
    
    
  ];
  const galleryImages = [
    fame.photo1,
    fame.photo2,
    fame.photo3,
    fame.gallery_img4,
    fame.gallery_img5,
    fame.gallery_img6,
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
      {/* Photo Gallery Section */}
        {!selectedArticle && (
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Photo Gallery</h2>
            <div className="image-gallery flex overflow-x-scroll space-x-4 p-4">
              {/* รูปที่ 1 */}
              <div className="flex-shrink-0 w-50 h-40">
                <img 
                  src={fame.photo1} 
                  alt="A description of photo1" 
                  className="w-full h-full object-cover rounded-lg shadow-md" 
                />
              </div>
              {/* รูปที่ 2 */}
              <div className="flex-shrink-0 w-50 h-40">
                <img 
                  src={fame.photo2} 
                  alt="A description of photo2" 
                  className="w-full h-full object-cover rounded-lg shadow-md" 
                />
              </div>
              {/* รูปที่ 3 */}
              <div className="flex-shrink-0 w-50 h-40">
                <img 
                  src={fame.photo3} 
                  alt="A description of photo3" 
                  className="w-full h-full object-cover rounded-lg shadow-md" 
                />
              </div>
              {/* รูปที่ 4 */}
              <div className="flex-shrink-0 w-50 h-40">
                <img 
                  src={fame.photo4} 
                  alt="A description of photo4" 
                  className="w-full h-full object-cover rounded-lg shadow-md" 
                />
              </div>
              <div className="flex-shrink-0 w-50 h-40">
                <img 
                  src={fame.photo5} 
                  alt="A description of photo4" 
                  className="w-full h-full object-cover rounded-lg shadow-md" 
                />
              </div>
            </div>
            {/* ปุ่ม See More */}
            <div className="text-center mt-8">
              <button
                onClick={() => alert('Redirecting to full gallery!')} // แทนที่ด้วยฟังก์ชันของคุณ
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
              >
                See More
              </button>
            </div>
          </div>
        )}

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {selectedArticle ? (
          // Expanded view of selected article
          <div className="bg-white p-6 rounded-lg shadow-lg mb-20 pb-20">
            <button
              onClick={() => setSelectedArticle(null)}
              className="mb-4 text-orange-500 hover:underline"
            >
              Back to All Blogs
            </button>
            <div className="relative w-full h-0 pb-[45%]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">{selectedArticle.title}</h2>
            <p className="text-gray-700 mt-2">{selectedArticle.description}</p>
            {selectedArticle.descriptions.map((desc, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-semibold">{desc.title}</h3>
                <p className="text-gray-600">{desc.description}</p>
              </div>
            ))}
          </div>

        ) : (
        // Blog Cards
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative w-45 h-56 md:h-64 lg:h-72">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 hover:text-orange-600 transition-colors">{article.title}</h3>
                    <p className="mt-2 text-gray-600 text-base">{article.description}</p>
                    <p className="mt-4 text-sm text-gray-500">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        )}
        
      </div>
    </div>
  );
};

export default Blogs;
