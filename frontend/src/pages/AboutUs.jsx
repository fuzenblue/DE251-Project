import React from 'react';
import { fame } from '../assets/fame'; 

const AboutUs = () => {
  return (
    <div>
      <header className="header">
      <h1>
        <span class="white-text">Welcome</span><span class="white-text"> to</span>&nbsp; 
        <span class="orange-text">Our Pineapple Farm</span>
      </h1>
      <p>Your premier destination for authentic farm experiences and the finest pineapple products in Thailand.</p>
    </header>


       {/* Info Cards Section */}
       <section className="info-cards">
        <div className="info-card green">
          <h3>Established</h3>
          <p>2010</p>
        </div>
        <div className="info-card orange">
          <h3>Location</h3>
          <p>Prachuap Khiri Khan, Thailand</p>
        </div>
        <div className="info-card brown">
          <h3>Farm Size</h3>
          <p>50 Rai (80,000 sq.m)</p>
        </div>
      </section>
      <section className="about">
        <div className="about-card">
          <img src={fame.pic2_aboutus} alt="Farm Overview" className="about-image" />
          <div className="about-content">
            <h3 className="about-title">Agricultural Learning</h3>
            <p className="about-text">Experience our comprehensive pineapple cultivation process with expert guidance and hands-on activities</p>
          </div>
        </div>

        <div className="about-card">
          <img src={fame.pic3_aboutus} alt="Farmers at work" className="about-image" />
          <div className="about-content">
            <h3 className="about-title">Photo Spots</h3>
            <p className="about-text">Capture beautiful moments among our vast pineapple fields and scenic viewpoints</p>
          </div>
        </div>

        <div className="about-card">
          <img src={fame.pic4_aboutus} alt="Farm Products" className="about-image" />
          <div className="about-content">
            <h3 className="about-title">Café & Restaurant</h3>
            <p className="about-text">Savor special dishes and beverages made from fresh pineapples harvested from our farm</p>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To cultivate the best pineapples while promoting sustainable agriculture practices that benefit our community and the planet.</p>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .header {
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
                      url(${fame.pic1_aboutus}) center/cover; /* ใช้รูปจาก fame.pic2_aboutus */
          color: white;
          padding: 4rem 2rem;
          text-align: center;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .white-text {
          color: white;
          }
          .orange-text {
            color: orange;
          }

        }

        .header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.5rem;
          margin-top: 1rem;
        }

        .about {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          background: #f9f9f9;
        }

        .about-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease-in-out;
        }

        .about-card:hover {
          transform: translateY(-5px);
        }

        .about-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .about-content {
          padding: 1.5rem;
        }

        .about-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .about-text {
          color: #666;
          line-height: 1.6;
        }

        .info-cards {
          display: flex;
          gap: 1rem;
          justify-content: space-between;
          margin-top: 2rem;
          padding: 2rem;
          flex-wrap: wrap;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          width: 30%;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .info-card.green {
          background-color: #8BC34A;
          color: white;
        }

        .info-card.orange {
          background-color: #FF9F1C;
          color: white;
        }

        .info-card.brown {
          background-color: #795548;
          color: white;
        }

        .mission {
          padding: 4rem 2rem;
          background: #FF9800;
          color: white;
          text-align: center;
        }

        .mission h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .mission p {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .info-cards {
            flex-direction: column;
            align-items: center;
          }

          .info-card {
            width: 80%;
            margin-bottom: 1rem;
          }

          .about {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUs;
