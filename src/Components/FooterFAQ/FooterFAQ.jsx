import React, { useState, useRef } from "react";
import "./FooterFAQ.scss";

const faqItems = [
  {
    question: "Why do I need a link in bio tool?",
    answer:
      "It lets you share multiple links from a single profile URL, helping you connect all your content and platforms easily.",
  },
  {
    question: "Is Linktree the original link in bio tool?",
    answer:
      "Linktree was among the first popular tools of this kind, though many alternatives now exist.",
  },
  {
    question: "Can you get paid and sell things from a Linktree?",
    answer:
      "Absolutely! Many link-in-bio tools support affiliate links, product embeds, and payment gateways.",
  },
  {
    question: "Is Linktree safe to use on all of my social media profiles?",
    answer:
      "Yes, it's widely accepted and safe to use on platforms like Instagram, TikTok, and Twitter.",
  },
  {
    question: "What makes Linktree better than the other link in bio options?",
    answer:
      "It offers customization, analytics, integrations, and ease of use — but newer platforms may offer even more flexibility.",
  },
  {
    question: "How can I drive more traffic to and through my Linktree?",
    answer:
      "Use eye-catching thumbnails, compelling CTAs, and regularly update your links to stay relevant.",
  },
  {
    question: "How many links should I have on my Linktree?",
    answer:
      "Ideally, keep it between 3 to 7. Too many links can reduce click-through rates.",
  },
  {
    question: "Do I need a website to use Linktree?",
    answer:
      "Nope! A link-in-bio tool acts as a mini-website, especially useful if you don't have a full website.",
  },
  {
    question: "Where can I download the app?",
    answer:
      "You can download the app from the App Store or Google Play, or access it directly on the web.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen((prev) => !prev)}>
        {question}
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FooterFAQ = () => {
  return (
    <footer className="faq-footer">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </footer>
  );
};

export default FooterFAQ;
