import "./CategoryPages.css";
import { PostPreview } from "../components";
import { allPosts } from "../posts";
import React from 'react';

export const Blog = () => {
  const visiblePosts = allPosts.filter(post => !post.hidden);
  const allTags = Array.from(new Set(visiblePosts.flatMap(post => post.tags))).filter(tag => tag !== 'About Us');
  const [selectedTag, setSelectedTag] = React.useState<string>('All');
  const [search, setSearch] = React.useState<string>('');

  const filteredPosts = visiblePosts.filter(post => {
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <div className="home-container">
      <div className="blog-controls" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem', justifyContent: 'space-between' }}>
        <div className="tags" style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            key="All"
            className={selectedTag === 'All' ? 'active' : ''}
            onClick={() => setSelectedTag('All')}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={tag === selectedTag ? 'active' : ''}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ minWidth: 200, maxWidth: 300, padding: '0.5rem 1rem', borderRadius: 8, border: '1px solid #e5e7eb', background: '#f8fafc', marginLeft: 'auto' }}
        />
      </div>
      <div className="blog-posts">
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', marginTop: '2rem' }}>
            No posts found.
          </div>
        ) : (
          filteredPosts.map(({ postId, imgAlt, imgSrc, title }) => (
            <PostPreview
              key={postId}
              postId={postId}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              title={title}
            />
          ))
        )}
      </div>
    </div>
  );
};