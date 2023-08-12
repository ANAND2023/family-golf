import React, { useEffect } from "react";
// import './YourComponentName.css'; // Import your CSS file
import "./Home.css";
const Home = () => {
  useEffect(() => {
    const crsr = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");

    const handleMouseMove = (event) => {
      crsr.style.left = event.clientX + "px";
      crsr.style.top = event.clientY + "px";
      blur.style.left = event.clientX - 250 + "px";
      blur.style.top = event.clientY - 250 + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    const h4all = document.querySelectorAll("#nav h4");
    h4all.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
      });
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      h4all.forEach(function (elem) {
        elem.removeEventListener("mouseenter", function () {
          crsr.style.scale = 3;
          crsr.style.border = "1px solid #fff";
          crsr.style.backgroundColor = "transparent";
        });
        elem.removeEventListener("mouseleave", function () {
          crsr.style.scale = 1;
          crsr.style.border = "0px solid #95C11E";
          crsr.style.backgroundColor = "#95C11E";
        });
      });
    };
  }, []);

  return (
    <div>
      <div id="nav">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          alt=""
        />
        <h4>TOPTRACER RANGE</h4>
        <h4>Golf Lessons</h4>
        <h4>Adventure Golf</h4>
        <h4>coffee shop</h4>
        <h4>leagues</h4>
      </div>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>

      <video
       autoPlay loop muted
      >
        <source src="https://sidcupfamilygolf.com/wp-content/uploads/2023/02/hero.mp4"/>
      </video>
      <div id="main">
        <div id="page1">
          <h1>EAT. DRINK. PLAY.</h1>
          <h2>WELCOME TO SIDCUP FAMILY GOLF!</h2>
          <p>
            Sidcup Family Golf is a multipurpose golf facility located in
            Sidcup, South East London. Passionate about technology, player
            development and making golf fun and accessible to everyone.
          </p>
          <div id="arrow">
            <i class="ri-arrow-down-line"></i>
          </div>
        </div>
        <div id="page2">
          <div id="scroller">
            <div id="scroller-in">
              <h4>TOPTRACER RANGE</h4>
              <h4>GOLF LESSONS</h4>
              <h4>ADVENTURE GOLF</h4>
              <h4>COFFEE SHOP</h4>
              <h4>LEAGUES</h4>
            </div>
            <div id="scroller-in">
              <h4>TOPTRACER RANGE</h4>
              <h4>GOLF LESSONS</h4>
              <h4>ADVENTURE GOLF</h4>
              <h4>COFFEE SHOP</h4>
              <h4>LEAGUES</h4>
            </div>
          </div>
          <div id="about-us">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
            />
            <div id="about-us-in">
              <h3>ABOUT US</h3>
              <p>
                Home to a 46-bay, multi-tier, floodlit driving range, powered by
                Toptracer Range technology. Complimented by a practice green and
                bunker, coffee shop and American Golf Store. There truly is
                something for everyone as we also boast two outdoor 18-hole
                dinosaur themed crazy golf courses.
              </p>
            </div>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
            />
          </div>
          <div id="cards-container">
            <div class="card" id="card1">
              <div class="overlay">
                <h4>TopRacer Range</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla quam molestias magni cupiditate architecto et enim quas
                  facere ipsum tempora?
                </p>
              </div>
            </div>
            <div class="card" id="card2">
              <div class="overlay">
                <h4>Adventure Golf</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla quam molestias magni cupiditate architecto et enim quas
                  facere ipsum tempora?
                </p>
              </div>
            </div>
            <div class="card" id="card3">
              <div class="overlay">
                <h4>Golf Lessons</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla quam molestias magni cupiditate architecto et enim quas
                  facere ipsum tempora?
                </p>
              </div>
            </div>
          </div>
          <div id="green-div">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
            <h4>
              SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
            </h4>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
          </div>
        </div>
        <div id="page3">
          <p>
            Excellent couple of hours, relax and enjoy in the fun. Staff were
            accommodating, friendly and very helpful. Café on site for
            refreshments etc. Will keep children enterntained during the
            holidays. Worth a visit if you haven’t been.
          </p>
          <img
            id="colon1"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
          <img
            id="colon2"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
            alt=""
          />
        </div>
        <div id="page4">
          <h1>WHAT ARE YOU WAITING FOR?</h1>
          <div class="elem">
            <h2>TOPTRACER RANGE</h2>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
            />
          </div>
          <div class="elem">
            <h2>TOPTRACER RANGE</h2>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
            />
          </div>
          <div class="elem">
            <h2>TOPTRACER RANGE</h2>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
            />
          </div>
        </div>
        <div id="footer">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
            alt=""
          />
          <div id="f1">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
              alt=""
            />
          </div>
          <div id="f2">
            <h3>TOPTRACER Ranges</h3>
            <h3>Golf Lessons</h3>
            <h3>Adventure Golf</h3>
          </div>
          <div id="f3">
            <h3>coffee shop</h3>
            <h3>LEAGUES</h3>
            <h3>Contact us</h3>
          </div>
          <div id="f4">
            <h4>
              A20, SIDCUP BYPASS <br />
              CHISLEHURST <br />
              KENT <br />
              BR7 6RP <br />
              TEL: 0208 309 0181 <br />
              GET DIRECTIONS <br />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
