import "./CategoryPages.css";
import { PostPreview } from "../components";
import { allPosts } from "../posts";
import React from 'react';

const tags = ['Travel', 'Lifestyle', 'About Us', 'Tutorials'];

export const Blog = () => {
  const [selectedTag, setSelectedTag] = React.useState('All');

  const filteredPosts = selectedTag === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className="home-container">
      <div className="tags">
        {tags.map(tag => (
          <button
            key={tag}
            className={tag === selectedTag ? 'active' : ''}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
        <button 
          key="All" 
          className={selectedTag === 'All' ? 'active' : ''}
          onClick={() => setSelectedTag('All')}
        >
          All
        </button>
      </div>
      <div className="blog-posts">
        {filteredPosts.map(({ postId, imgAlt, imgSrc, title }) => (
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
  );
};