import logo from './logo.png'
import profile_pic from './profile.jpg'

import dropdown_icon from './dropdown-icon.svg'
import menu_icon from './menu-icon.svg'
import cross_icon from './cross-icon.svg'
import info_icon from './info_icon.svg'

import header_img from './header_img.png'
import delivery_truck from './delivery-truck-icon.svg'
import like_icon from './like-icon.svg'
import new_product_icon from './new-product.svg'
import pineapple_icon from './pineapple.png'
import choose_us from './choose-us-img.png'
import check_icon from './check.svg'

import promo_card from './promo-card-bg.png'
import workshop_card from './workshop-card-img.png'
import product_card from './product-card-service-page-img.png'
import cafe_card from './cafe-card-img.png'
import delivery_card from './deli-card-img.png'

import cafe_sm from './cafe.jpg'
import delivery_sm from './deli.jpg'
import service_img from './service-banner-img.png'
import filter_icon from './filter.png'

import fresh_card from './fresh-card-img.png'
import fresh_icon from './fresh-icon.svg'
import eco_card from './eco-card-img.png'
import eco_icon from './environment-protection-icon.svg'
import deli_card from './doorstep-deli-card-img.png'
import deli_icon from './delivery-truck-icon.svg'

import cafe_img_l from './cafe-l-img.png'
import cafe_img_c from './cafe-center-img.png'
import cafe_img_r from './cafe-r-img.png'

import popular_bg from './popular-workshop-bg.jpg'
import planting_icon from './planting.svg'
import preserve_icon from './preserve-icon.svg'
import craft_icon from './paper-crafts-icon.svg'
import chef_icon from './chef.svg'

import video_ads from './pineapple_ads.mp4'

import play_icon from './play.svg'
import welcome_img from './Piña_.jpg'
import cart_icon from './online-shopping.png'

// export const for assets 
export const assets = {
    logo,
    profile_pic,
    dropdown_icon,
    menu_icon,
    cross_icon,
    info_icon,
    header_img,
    delivery_truck,
    like_icon,
    new_product_icon,
    pineapple_icon,
    choose_us,
    check_icon,
    service_img,
    filter_icon,
    popular_bg,
    video_ads,
    play_icon,
    welcome_img,
    cart_icon,
}

// export const for workshop
export const card = {
    promo_card,
    workshop_card,
    product_card,
    cafe_card,
    delivery_card,
    cafe_sm,
    delivery_sm,
    fresh_card,
    fresh_icon,
    eco_card,
    eco_icon,
    deli_card,
    deli_icon,
    cafe_img_l,
    cafe_img_c,
    cafe_img_r,
    preserve_icon,
    craft_icon,
    chef_icon,
    planting_icon,

}

export const category_workshop = [
    {
        category: 'Planting',
        text: 'Pineapple Planting'
    },
    {
        category: 'Cooking',
        text: 'Pineapple Cooking'
    },
    {
        category: 'Crafting',
        text: 'Crafting With Pineapple'
    },
    {
        category: 'For Kids',
        text: 'Workshop For Kids'
    },
    {
        category: 'Tour',
        text: 'Farm Tour with Gide'
    },
]

export const workshops = [
    {
        _id: 'workshop1', // การปลูกสับปะรด ตั้งแต่การเลือกดินจนถึงการดูแลรักษา
        name: 'Pineapple Planting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
            profile_pic,
        ],
        category: 'Planting',
        about: 'Learn how to plant and care for pineapples in a fun, hands-on workshop. Perfect for beginners and garden lovers.',
        description: 'This workshop will guide you through the basics of planting pineapples, from selecting the right soil to watering and care. You’ll learn how to grow pineapples from crowns, and how to ensure your plants thrive in your garden or balcony. Our experts will provide you with all the tools and tips you need to succeed. By the end of the workshop, you’ll be equipped with the knowledge to start your own pineapple garden and watch your plants grow.',
        price: 18,
    },
    {
        _id: 'workshop2', // การจัดตั้งสวนสับปะรดที่บ้าน เรียนรู้การปลูกสับปะรดในสภาพแวดล้อมที่บ้านหรือสวน
        name: 'Pineapple Garden Setup',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Planting',
        about: 'Set up your very own pineapple garden, guided by our experts. Learn all the secrets to a successful garden.',
        description: 'This workshop covers the essentials of setting up a pineapple garden in your home or backyard. You’ll learn about the best soil, sunlight requirements, and how to keep your pineapples healthy and pest-free. From planting the crowns to watching your pineapples grow, this workshop will take you through every step with hands-on instruction and expert advice. Perfect for anyone interested in growing their own tropical fruit.',
        price: 22,
    },
    {
        _id: 'workshop3', // การทำอาหารจากสับปะรด เช่น สลัดหรือซุปสับปะรด
        name: 'Pineapple Cooking',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Cooking',
        about: 'Explore creative ways to cook with pineapples. Ideal for foodies looking to try something new.',
        description: 'In this interactive workshop, you will discover how to prepare a variety of dishes with pineapples. From pineapple salsas to grilled pineapple skewers, you will learn how to balance the sweetness and tartness of pineapples in both savory and sweet dishes. Our expert chefs will guide you through the cooking process, sharing tips and tricks to bring out the best in your tropical dishes. By the end of the session, you’ll have the skills to impress your guests with delicious pineapple-based meals.',
        price: 24,
    },
    {
        _id: 'workshop4', // การทำอาหารจานพิเศษจากสับปะรด ใช้สับปะรดเป็นส่วนผสมหลักในการทำอาหาร
        name: 'Tropical Pineapple Dishes',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Cooking',
        about: 'Learn to cook tropical-inspired pineapple dishes with expert chefs.',
        description: 'This workshop focuses on creating savory and sweet dishes using pineapples. You’ll learn how to cook with pineapple in ways that enhance its natural sweetness and texture. Our chefs will demonstrate how to pair pineapples with meats, vegetables, and other fruits to create unique, flavorful dishes. Whether it’s a fresh pineapple salsa or a grilled pineapple main course, you’ll leave with delicious recipes and new cooking techniques to use at home.',
        price: 22,
    },
    {
        _id: 'workshop5', // การทำขนมจากสับปะรด
        name: 'Pineapple Snack',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Cooking',
        about: 'Bake a delicious pineapple snack from scratch. Perfect for baking enthusiasts and home cooks.',
        description: 'In this hands-on workshop, you will learn how to bake your own pineapple snack from scratch. You’ll work with fresh ingredients, including ripe pineapples, and learn how to create a soft, sweet loaf that is perfect for breakfast or as a snack. Our expert baker will guide you through the process of mixing, kneading, and baking to ensure you leave with a delicious, homemade pineapple bread. Whether you’re an experienced baker or a beginner, you’ll enjoy the process and the tasty results.',
        price: 18,
    },
    {
        _id: 'workshop6', // การทำสบู่ธรรมชาติจากสารสกัดจากสับปะรด
        name: 'Natural Soap Making',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Crafting',
        about: 'Learn to make your own natural soaps using pineapple extracts. Great for eco-conscious crafters.',
        description: 'This creative workshop teaches you how to make natural, homemade soaps with pineapple extracts. You will learn about the benefits of using natural ingredients like oils and extracts in soap making. Our instructors will guide you step-by-step through the process of mixing, pouring, and molding your soap. You’ll leave with a set of beautifully crafted soaps, perfect for personal use or as thoughtful, handmade gifts for friends and family.',
        price: 20,
    },
    {
        _id: 'workshop7', // การทำงานฝีมือจากกระดาษที่มีธีมเป็นสับปะรด
        name: 'Pineapple Paper Crafting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Crafting',
        about: 'Create colorful pineapple-themed paper crafts. A perfect workshop for kids and families.',
        description: 'This fun and hands-on paper crafting workshop will teach you how to make vibrant pineapple-themed crafts. You’ll learn how to create paper pineapple decorations, cards, and other fun projects using simple materials. The instructor will guide you through the process, showing you how to cut, fold, and glue your way to beautiful creations. Whether you’re a beginner or an experienced crafter, you’ll have a great time expressing your creativity and taking home your very own pineapple crafts.',
        price: 15,
    },
    {
        _id: 'workshop10', // การชิมสับปะรดและการทำไวน์จากสับปะรด
        name: 'Pineapple Wine Making',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Cooking',
        about: 'Explore the world of pineapple tasting and learn how to make your own pineapple wine.',
        description: 'This unique and interactive workshop allows you to indulge in pineapple tasting while also learning the art of pineapple wine making. You’ll taste several varieties of pineapple, learning to appreciate their unique flavors and textures. Then, you will learn the process of fermenting pineapples into wine, guided by an expert winemaker. You’ll leave with the knowledge to make your own pineapple wine at home and an appreciation for the different flavor profiles of this tropical fruit.',
        price: 22,
    },
    {
        _id: 'workshop11', // การทำงานฝีมือจากวัสดุต่าง ๆ ที่มีธีมสับปะรด เช่น พวงกุญแจหรือการ์ด
        name: 'Pineapple Crafting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Crafting',
        about: 'Create fun and artistic pineapple-themed crafts for decoration and gifts.',
        description: 'In this workshop, you will learn how to make beautiful pineapple-themed crafts using a variety of materials, from felt to fabric and paper. You will create fun and colorful items such as pineapple keychains, coasters, and more. It’s a great way to add a tropical touch to your home or create unique gifts for friends and family.',
        price: 15,
    },
    {
        _id: 'workshop12', // การวาดภาพด้วยธีมสับปะรด
        name: 'Pineapple Painting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'Crafting',
        about: 'Paint your own pineapple masterpiece, perfect for art lovers.',
        description: 'In this fun and creative workshop, you will create your own pineapple-themed painting. Whether you are a beginner or an experienced artist, you will learn techniques for painting pineapples in vibrant colors and textures. The instructor will provide step-by-step guidance, allowing you to bring your unique vision to life on canvas. It’s a relaxing and rewarding way to spend the day while creating a beautiful piece of art.',
        price: 20,
    },
    {
        _id: 'workshop13', // งานฝีมือกระดาษสำหรับเด็กที่มีธีมสับปะรด
        name: 'Pineapple Paper Crafting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'For Kids',
        about: 'Kids will love creating pineapple-themed paper crafts in this fun and easy workshop.',
        description: 'This workshop is perfect for kids who love to create! Using paper, scissors, and glue, kids will make fun pineapple-themed crafts such as cards, decorations, and small paper sculptures. The workshop is designed for children, with simple instructions and plenty of creative fun. It’s a great way to develop fine motor skills while having fun with arts and crafts.',
        price: 12,
    },
    {
        _id: 'workshop14', // การวาดภาพสับปะรดสำหรับเด็ก ๆ
        name: 'Pineapple Painting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'For Kids',
        about: 'A fun and creative painting class for kids to explore their artistic talents with pineapples.',
        description: 'In this workshop, kids will have the chance to create their very own pineapple-themed paintings. Using simple painting techniques and colorful paints, children will be guided step by step in creating their masterpiece. The workshop encourages creativity, self-expression, and fine motor skills development. By the end, each child will take home their own beautiful painting to display at home.',
        price: 14,
    },
    {
        _id: 'workshop15', // การทำงานฝีมือจากวัสดุที่ง่าย ๆ สำหรับเด็ก
        name: 'Pineapple Crafting',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'For Kids',
        about: 'Create fun pineapple-themed crafts that kids will love.',
        description: 'In this hands-on crafting workshop, kids will make various pineapple-themed crafts such as keychains, paper crowns, and more! The workshop is designed to be easy and enjoyable for children, with simple materials and instructions. It’s a great way for kids to tap into their creativity and make something special to take home.',
        price: 10,
    },
    {
        _id: 'workshop17', // การทำสมูทตี้สับปะรดที่เด็ก ๆ สามารถทำได้เอง
        name: 'Pineapple Smoothies',
        cover_image: profile_pic,
        video: video_ads,
        images: [
            header_img,
            profile_pic,
            logo,
        ],
        category: 'For Kids',
        about: 'Make delicious pineapple smoothies that kids will love.',
        description: 'In this fun and tasty workshop, kids will learn how to make refreshing pineapple smoothies. They will get hands-on experience blending pineapples with other fruits, creating their own smoothie recipes. The instructor will guide them through the process of measuring, blending, and tasting their creations. It’s a great way to introduce kids to healthy, delicious beverages!',
        price: 12,
    }
]

import product1 from './p1.0.jpg'
import product2 from './p2.0.jpg'
import product3 from './p3.0.jpg'
import product4 from './p4.0.jpg'
import product5 from './p5.0.jpg'
import product6 from './p6.0.jpg'

import imgP1_1 from './p1.1.jpg'
import imgP1_2 from './p1.2.jpg'
import imgP1_3 from './p1.3.jpg'
import imgP1_4 from './p1.4.jpg'

import imgP2_1 from './p2.1.jpg'
import imgP2_2 from './p2.2.jpg'
import imgP2_3 from './p2.3.jpg'
import imgP2_4 from './p2.4.jpg'

import imgP3_1 from './p3.1.jpg'
import imgP3_2 from './p3.2.jpg'
import imgP3_3 from './p3.3.jpg'

import imgP4_1 from './p4.1.jpg'
import imgP4_2 from './p4.2.jpg'
import imgP4_3 from './p4.3.jpg'

import imgP5_1 from './p5.1.jpg'
import imgP5_2 from './p5.2.jpg'
import imgP5_3 from './p5.3.jpg'

import imgP6_1 from './p6.1.jpg'
import imgP6_2 from './p6.2.jpg'
import imgP6_3 from './p6.3.jpg'


export const products = [
    {
        id: 'products1',
        image: product1,
        name: "Pineapple Biscuit Treats",
        about: "A fun, sweet treat with a crispy, buttery crust filled with a pineapple-flavored cream.",
        description: "These Pineapple Biscuit Treats are an exciting blend of crispy biscuit and a refreshing pineapple filling. The product’s design imitates a small pineapple, creating a playful twist to your regular snacking experience. Perfect for a tea-time snack or a sweet indulgence, the pineapple flavor brings a tropical touch. The biscuits are made with premium ingredients for that crispy texture, making them a must-try for anyone who loves the vibrant taste of pineapple. The biscuits are individually packaged for freshness, allowing you to enjoy them whenever you crave a fruity treat.",
        price: 9,
        imgDesc: [
            imgP1_1,
            imgP1_2,
            imgP1_3,
            imgP1_4,
        ],
    },
    {
        id: 'products2',
        image: product2,
        name: "Bacardi Pineapple Rum",
        about: "A refreshing blend of Bacardi rum with the sweet and tangy taste of pineapple.",
        description: "Bacardi Pineapple Rum is a smooth, tropical spirit that brings together the iconic flavor of Bacardi rum and the sweetness of ripe pineapple. Perfect for mixing cocktails, this rum adds a fruity punch to your favorite drinks. Whether you’re making a piña colada, daiquiri, or simply enjoying it on the rocks, Bacardi Pineapple Rum is the perfect companion to your tropical drink adventures. With its smooth finish and vibrant pineapple flavor, this rum will transport you to a beachside paradise with every sip.",
        price: 19,
        imgDesc: [
            imgP2_1,
            imgP2_2,
            imgP2_3,
            imgP2_4,
        ],
    }, {
        id: 'products3',
        image: product3,
        name: "Pineapple Sugar Scrub",
        about: "A moisturizing sugar scrub that exfoliates your skin while leaving a refreshing pineapple scent.",
        description: "The Pineapple Shea Sugar Scrub is a luxurious skincare product designed to gently exfoliate and smooth your skin. Infused with the tropical scent of pineapple, this scrub revitalizes and nourishes your skin. The scrub’s sugar crystals work to exfoliate dead skin cells, leaving your skin soft and glowing. It’s perfect for use in the shower or bath, and its moisturizing shea butter formula ensures that your skin stays hydrated after use. Ideal for those looking for a tropical escape in their skincare routine, this scrub offers a delightful sensory experience.",
        price: 13,
        imgDesc: [
            imgP3_1,
            imgP3_2,
            imgP3_3,
        ],
    }, {
        id: 'products4',
        image: product4,
        name: "Buchanan’s Pineapple Whiskey",
        about: "A smooth whiskey infused with the sweet and tangy essence of pineapple.",
        description: " Buchanan’s Pineapple Whiskey is a unique offering in the world of flavored whiskies. This Scottish whiskey has been infused with the bright, tropical flavor of pineapple, adding a refreshing twist to the traditional whiskey experience. It’s perfect for those who love to experiment with flavors or enjoy a smoother, more fruity whiskey. Whether you prefer sipping it neat, on the rocks, or in a cocktail, Buchanan’s Pineapple Whiskey brings a tropical vibe to any drinking occasion.",
        price: 25,
        imgDesc: [
            imgP4_1,
            imgP4_2,
            imgP4_3,
        ],
    }, {
        id: 'products5',
        image: product5,
        name: "Goozi Pineapple Drink",
        about: "A refreshing, fruity pineapple beverage that’s perfect for any time of day.",
        description: "Goozi Pineapple Drink is a refreshing beverage that captures the sweet and tangy flavor of pineapple in every sip. This drink is perfect for quenching your thirst on a hot day or as a refreshing complement to meals. Its light and fruity taste make it a go-to choice for anyone who enjoys the tropical flavor of pineapple. Made with high-quality ingredients, Goozi Pineapple Drink offers a clean, refreshing experience that’s perfect for a casual get-together or as an everyday refreshment.",
        price: 4,
        imgDesc: [
            imgP5_1,
            imgP5_2,
            imgP5_3,
        ],
    }, {
        id: 'products6',
        image: product6,
        name: "Fauxmosa Pineapple Lemonade",
        about: "A non-alcoholic beverage that combines the tartness of lemon and the sweetness of pineapple.",
        description: "Fauxmosa Pineapple Lemonade is an alcohol-free mimosa that brings together the zesty flavor of lemon with the sweet notes of pineapple. It’s a refreshing drink that can be enjoyed by anyone, whether you’re looking for a light and flavorful beverage for brunch or a non-alcoholic option for social occasions. With its bright and vibrant flavors, Fauxmosa is a perfect choice for those who want to enjoy the taste of a mimosa without the alcohol. The drink’s crisp, clean finish and the tropical pineapple flavor make it a refreshing beverage for any time of day.",
        price: 5,
        imgDesc: [
            imgP6_1,
            imgP6_2,
            imgP6_3,
        ],
    },
]

