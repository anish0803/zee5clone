import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="container">
        <div className="zeelogo">
          <img
            src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.44"
            alt=""
          />
        </div>

        <ul className="nav1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Tvshows</a>
          </li>

          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Webseries</a>
          </li>

          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Premium</a>
          </li>
          <li>
            <a href="/">LiveTv</a>
          </li>
          <li>
            <a href="/">Music</a>
          </li>
          <li>
            <a href="/">Rent</a>
          </li>
          <li>
            <a href="/">Kids</a>
          </li>
          <li>
            <a href="/">Videos</a>
          </li>
          <li>
            <a href="/">Channels</a>
          </li>

          <div className="search">
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
            <input type="text" placeholder="search for movies and tvshows,Channels,etc" />
            
            {/* <i class="fa-solid fa-microphone"></i> */}
          </div>
          <div className="button1">
            <button>Aअ</button>
            <button>Login</button>
              
            {/* <i class="fa-solid fa-crown"></i> */}
            <button>BUY PLAN</button>

            {/* <i class="fa-solid fa-bars"></i> */}
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
