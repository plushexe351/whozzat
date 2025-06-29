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
import iphone1 from "../assets/iphone-skew.png";
import iphone2 from "../assets/iphone-modern.png";
import showcase_visual from "../assets/showcase-visual.png";
import {
  DollarSign,
  Globe2,
  HeadphoneOff,
  HeadphonesIcon,
  LineChart,
} from "lucide-react";
import FooterFAQ from "../Components/FooterFAQ/FooterFAQ";

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
          <img src={showcase_visual} alt="" />
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
          <div className="gradient-overlay"></div>
          <div className="dashboard">
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
        <div className="hero-visual">
          <div className="mockups">
            <img src={iphone1} className="iphone1" alt="" />
            <img src={iphone2} className="iphone2" alt="" />
          </div>
        </div>
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
      <section className="faq">
        <FooterFAQ />
      </section>
      <section className="footer">
        <div className="footer-content w-full max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 py-12 px-4 md:px-8 text-white">
          <div className="footer-brand flex-1 flex flex-col gap-2">
            <span className="footer-logo text-3xl font-bold tracking-wide mb-2 text-pink-200">
              Whozzat!
            </span>
            <p className="footer-desc text-base text-gray-200 max-w-md">
              All your links, content, and socials in one beautiful bio page.
              Grow your audience, showcase your best work, and stay in control
              of your brand.
            </p>
          </div>
          <div className="footer-links flex-1 flex flex-col gap-2">
            <nav className="footer-page-links flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-medium">
              <a
                href="/landing"
                className="hover:underline hover:text-pink-200"
              >
                About
              </a>
              <a href="/home" className="hover:underline hover:text-pink-200">
                Home
              </a>
              <a
                href="/profile"
                className="hover:underline hover:text-pink-200"
              >
                Profile
              </a>
              <a
                href="/bookmarks"
                className="hover:underline hover:text-pink-200"
              >
                Bookmarks
              </a>
              <a
                href="/analytics"
                className="hover:underline hover:text-pink-200"
              >
                Analytics
              </a>
            </nav>
          </div>
        </div>
        <div className="footer-legal w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4 md:px-8 pb-6 text-gray-300 text-xs border-t border-gray-700">
          <div className="footer-legal-links flex gap-2 md:gap-4 py-2">
            <a href="" className="footer-privacy hover:underline">
              Privacy Policy
            </a>
            <span className="footer-legal-sep">|</span>
            <a href="" className="footer-terms hover:underline">
              Terms of Service
            </a>
          </div>
          <div className="footer-copy py-2 text-center md:text-right">
            &copy; {new Date().getFullYear()} Whozzat! &mdash; All rights
            reserved.
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Landing;
