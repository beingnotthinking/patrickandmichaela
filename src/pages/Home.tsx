import "./Home.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredPosts, allPosts } from "../posts";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

export const Home = () => {
  const [recentVideos, setRecentVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [youtubeError, setYoutubeError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/.netlify/functions/youtube');
        if (response.ok) {
          const videos = await response.json();
          setRecentVideos(videos.slice(0, 3));
        } else {
          const error = await response.json();
          setYoutubeError(error.error || 'Failed to fetch YouTube videos.');
        }
      } catch (error: any) {
        setYoutubeError(error.message || 'Failed to fetch YouTube videos.');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const featuredProducts = [
    {
      id: "1",
      name: "Night Cruising Water Bottle",
      price: "$30.00",
      image: "https://imgproxy.fourthwall.com/H2zne4hsclRBz8vghqAAsbIVLrsCiPtcnEQ5nxOYYOM/w:900/sm:1/enc/IURIZu48GjV4ddNj/BZBXUgI1_rolOOCu/dzP7LxR1bnTaD8kw/W9nb2fxDrUXAbH8s/_5y_4TpmnFbPBgkq/ai3-8k0o5l6V4yf6/VRY6lsjcw9qudvFH/xmbo2rnAiUQuzIpW/AB5tLgwndPWGfR5H/G_Ovdsq-aOltZAXC/W7LFvmTrYGWpqRXX/YnqBMHJtsy8HB-96/AgUkXYlfv1DTtTXR/pJEVn7Fwzz5Z-8zZ/sokXfPKRmQE",
      url: "https://shop.patrickandmichaela.com/products/night-cruising-water-bottle-3"
    },
    {
      id: "2",
      name: "Sailing Thalia Embroidered Hoodie",
      price: "$42.00",
      image: "https://imgproxy.fourthwall.com/Bioh7Franwnw3XSEuiM6rGqQWTzkJyRAci1P6q_Kfm0/w:900/sm:1/enc/AZvnWMq4bVNrx41_/3vZ2EUvm5UjuBLtw/up5Ev6boM0VXIhug/ef2kf8iuH2a-SzyD/8FLh6-wqJyjhitPM/uIYssrGoFAGFYjsH/TU_1pI-q-XRqDHxw/1G0rvB4l4Cj89_2G/qC-fDK5v3-DxMLrg/NlrdQQBwNIRl7gnu/7ACDBoarQhSPgczh/qZtL87Ehswpi6UIb/fz-zcAfQqYJ9te0x/azYw-VGEgqgn1csC/CqkjVYogUYk",
      url: "https://shop.patrickandmichaela.com/en-usd/products/sailing-thalia-embroidered-hoodie"
    }
  ];

  const patreonTiers = [
    {
      name: "Thalia Deckhand",
      price: "$6/month",
      mostPopular: true,
      benefits: [
        "Name in Video Credits",
        "Videos Released Without Ads",
        "Patreon Exclusive Posts",
        "Access to the Patrick and Michaela Patrons Only Facebook Page",
        "Our Eternal Gratitude <3"
      ]
    },
    {
      name: "Thalia Crew",
      price: "$12/month",
      mostPopular: false,
      benefits: [
        "Access to Monthly Question / Answer Live Stream",
        "Name in Video Credits",
        "Videos Released Without Ads",
        "Patreon Exclusive Posts",
        "Access to the Patrick and Michaela Patrons Only Facebook Page",
        "Our Eternal Gratitude <3"
      ]
    },
    {
      name: "Thalia Mate",
      price: "$24/month",
      mostPopular: false,
      benefits: [
        "1 Hour Video Call with Us! (After 4 months of Payment)",
        "Access to Monthly Question / Answer Live Stream",
        "Name in Video Credits",
        "Videos Released Without Ads",
        "Patreon Exclusive Posts",
        "Access to the Patrick and Michaela Patrons Only Facebook Page",
        "Our Eternal Gratitude <3"
      ]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Sailing the World with Patrick & Michaela</h1>
            <p className="hero-subtitle">
              Join us aboard Thalia as we explore the world's oceans, sharing our adventures, 
              gear reviews, and the incredible sailing lifestyle
            </p>
            <div className="hero-buttons">
              <a href="https://youtube.com/@patrickandmichaela" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Watch Our Videos
              </a>
              <Link to="/blog" className="btn btn-secondary">
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Videos</h2>
          <p className="section-subtitle">
            Catch up on our latest sailing adventures and gear reviews
          </p>
          {youtubeError && (
            <div style={{ color: 'red', textAlign: 'center', marginBottom: '2rem' }}>
              <strong>Could not load YouTube videos:</strong> {youtubeError}
            </div>
          )}
          <div className="grid grid-3">
            {loading && !youtubeError ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="video-card card">
                  <div className="video-thumbnail">
                    <div className="loading-placeholder"></div>
                  </div>
                  <div className="video-info">
                    <div className="loading-placeholder-text"></div>
                    <div className="loading-placeholder-text short"></div>
                  </div>
                </div>
              ))
            ) : (
              recentVideos.map((video) => (
                <div key={video.id} className="video-card card">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-button"
                    >
                      ▶
                    </a>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <div className="video-meta">
                      <span>{formatDate(video.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="section-cta">
            <a href="https://youtube.com/@patrickandmichaela" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Support Our Journey</h2>
          <p className="section-subtitle">
            Get your hands on our exclusive sailing merchandise
          </p>
          <div className="grid grid-2">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <a href={product.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patreon Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Join Our Crew</h2>
          <p className="section-subtitle">
            Support our sailing adventures and get exclusive perks
          </p>
          <div className="grid grid-3">
            {patreonTiers.map((tier, index) => (
              <div key={index} className={`patreon-card card${tier.mostPopular ? ' most-popular' : ''}`}>
                {tier.mostPopular && <div className="most-popular-badge">Most Popular</div>}
                <div className="tier-header">
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-price">{tier.price}</p>
                </div>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
                <a 
                  href="https://www.patreon.com/c/patrickandmichaela" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="section-subtitle">
            Gear reviews, sailing tips, and stories from our adventures
          </p>
          <div className="grid grid-3">
            {(() => {
              // Get up to 3 posts: first featured, then latest (no duplicates)
              const postsToShow = [
                ...featuredPosts,
                ...allPosts.filter(
                  p => !featuredPosts.some(f => f.postId === p.postId)
                )
              ].slice(0, 3);
              return postsToShow.map(({ postId, imgAlt, imgSrc, title }) => (
                <div key={postId} className="blog-card card">
                  <img src={imgSrc} alt={imgAlt} className="blog-image" />
                  <div className="blog-info">
                    <h3 className="blog-title">{title}</h3>
                    <Link to={`/blog/${postId}`} className="btn btn-secondary">
                      Read More
                    </Link>
                  </div>
                </div>
              ));
            })()}
          </div>
          <div className="section-cta">
            <Link to="/blog" className="btn btn-primary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
