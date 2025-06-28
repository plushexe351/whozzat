import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import "./styles/Landing.scss";
import "./styles/FrutigerButton.scss";
import { useToast } from "../Context/ToastContext";
import insta from "../assets/instagram.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import spotify from "../assets/spotify.png";
import {
  DollarSign,
  Globe2,
  HeadphoneOff,
  HeadphonesIcon,
  LineChart,
} from "lucide-react";

const Landing = () => {
  const { addToast } = useToast();
  return (
    <motion.div className="Landing">
      <motion.section
        className="hero main"
        initial={{ opacity: 0, y: -100, x: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      >
        <motion.h2 className="title">
          All your links in one simple bio.{" "}
        </motion.h2>
        <p className="description">
          Drop your content, your shop, and your socials - all in one place.
          Share what matters, grow your audience, and stay in control of your
          brand.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addToast("Claimed!");
          }}
        >
          <input type="text" name="" id="" placeholder="whozzat.in/" />
          <button className="frutiger-button">
            <div className="inner">
              <div className="top-white"></div>
              <span className="text">Claim your Whozzat</span>
            </div>
          </button>
        </form>
      </motion.section>
      <section className="hero showcase">
        <div className="hero-visual social-cards-row">
          <div className="d3-btn spotify">
            <button
              className="frutiger-button"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner">
                <div className=""></div>
                <span className="text">
                  <img src={spotify} alt="" />
                </span>
              </div>
            </button>
          </div>
          <div className="d3-btn instagram">
            <button
              className="frutiger-button"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner">
                <div className=""></div>
                <span className="text">
                  <img src={insta} alt="" />
                </span>
              </div>
            </button>
          </div>
          <div className="d3-btn tiktok">
            <button
              className="frutiger-button"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner tiktok">
                <div className=""></div>
                <span className="text">
                  <img src={tiktok} alt="" />
                </span>
              </div>
            </button>
          </div>
          <div className="d3-btn youtube">
            <button
              className="frutiger-button"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner youtube">
                <div className=""></div>
                <span className="text">
                  <img src={youtube} alt="" />
                </span>
              </div>
            </button>
          </div>
          <div className="d3-btn github">
            <button
              className="frutiger-button"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner youtube">
                <div className=""></div>
                <span className="text">
                  <img src={github} alt="" />
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="hero-text">
          <h2 className="title">Showcase Your Best Work</h2>
          <p className="description">
            Highlight your top projects, social profiles, and content in one
            place. Make it easy for your audience to discover what matters most.
          </p>
          <button
            className="frutiger-button"
            onClick={() => addToast("Get started!")}
          >
            <div className="inner">
              <div className="top-white"></div>
              <span className="text">Get Started</span>
            </div>
          </button>
        </div>
      </section>
      <section className="hero analytics">
        <div className="hero-text">
          <h2 className="title">Analytics & Insights</h2>
          <p className="description">
            Track clicks, engagement, and audience growth with beautiful
            analytics. Understand your impact and optimize your links for better
            results.
          </p>
          <button
            className="frutiger-button get-started"
            onClick={() => addToast("Get started!")}
          >
            <div className="inner">
              <div className="top-white"></div>
              <span className="text">Get Started</span>
            </div>
          </button>
        </div>
        <div className="hero-visual">
          <div class="gradient-overlay"></div>
          <div class="dashboard">
            {/* <div class="card clickthrough">
              <div class="chart"></div>
              <div class="value">43,500</div>
              <div class="label">Clickthrough rate</div>
            </div>

            <div class="card track-plays">
              <div class="icon">
                <HeadphonesIcon size={40} className="icon" />
              </div>
              <div class="value">643</div>
              <div class="label">Track Plays</div>
            </div>

            <div class="card sales">
              <div class="icon">
                <DollarSign size={40} className="icon" />
              </div>
              <div class="value">$2,362</div>
              <div class="label">Sales</div>
            </div>

            <div class="card visits">
              <div class="globe">🌍</div>
              <div class="location">New York, USA</div>
              <div class="value">960</div>
              <div class="label">Visits</div>
            </div> */}
            <button
              className="frutiger-button clickthrough"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner">
                <LineChart className="icon" />
                <div className="text rate">45000</div>
                <span className="text">Clickthrough rate</span>
              </div>
            </button>
            <button
              className="frutiger-button track-plays"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner">
                <HeadphonesIcon className="icon" />

                <div className="text rate">643</div>

                <span className="text">Track plays</span>
              </div>
            </button>
            <button
              className="frutiger-button sales"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner">
                <DollarSign className="icon" />

                <div className="text rate">$2642</div>
                <span className="text">Sales</span>
              </div>
            </button>
            <button
              className="frutiger-button visits"
              onClick={() => addToast("Get started!")}
            >
              <div className="inner">
                <Globe2 className="icon" />

                <div className="text rate">892</div>
                <span className="text">Visits</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="hero personalize">
        <div className="hero-visual"></div>
        <div className="hero-text">
          <h2 className="title">Personalize Your Page</h2>
          <p className="description">
            Choose from stunning themes, add your branding, and make your
            link-in-bio page truly yours. Stand out and express your unique
            style.
          </p>
          <button
            className="frutiger-button get-started"
            onClick={() => addToast("Get started!")}
          >
            <div className="inner">
              <div className="top-white"></div>
              <span className="text">Get Started</span>
            </div>
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Landing;
