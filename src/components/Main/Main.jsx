import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>gmn</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Donkey</span>
          </p>
          <p>How can i help you Donkey</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>your text placed here...</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>oh ini teks apa aja</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>ini juga teks apa aja</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>ini teks doang.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
