import "./Home.css";

import { InstagramData, PostPreview } from "../components/";
import React, { useEffect } from "react";
import { featuredPosts } from "../posts";
import { RecentInstagramPosts } from "../components/RecentInstagramPosts";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="blog-posts">
          {featuredPosts.map(({ postId, imgAlt, imgSrc, title }) => (
            <PostPreview
              key={postId}
              postId={postId}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              title={title}
            />
          ))}
        </div>
      </div>
      <RecentInstagramPosts />
    </>
  );
};
