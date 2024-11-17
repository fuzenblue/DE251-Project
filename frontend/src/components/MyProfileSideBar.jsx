import React from 'react';
import { fame } from '../assets/fame';
import { Link } from 'react-router-dom';

const MyProfileSideBar = () => {
  return (
    <div className="w-64 bg-white shadow-lg hidden md:block">
      <div className="p-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={fame.lisa_pic}
            alt="Profile"
            className="w-28 h-28 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold">Lisa Blackpink</h2>
        </div>

        {/* Menu Buttons */}
        <div>
          <Link to="/my-profile">
            <button className="btn btn-primary w-full my-1 py-3 px-6 rounded-full text-md flex items-center justify-center space-x-2">
              <img src={fame.user1} alt="User Icon" className="w-5 h-5 " />
              <span>My Profile</span>
            </button>
          </Link>
          <Link to="/my-booking">
            <button className="btn btn-primary w-full my-1 py-3 px-6 rounded-full text-md">
              <img src={fame.bk_icon} alt="User Icon" className="w-5 h-5 " />
              <span>My Booking</span>
            </button>
          </Link>
          <Link to="/my-order">
            <button className="btn btn-primary w-full my-1 py-3 px-6 rounded-full text-md">
            <img src={fame.bag_icon} alt="User Icon" className="w-5 h-5 " />
            <span>My Order</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfileSideBar;
