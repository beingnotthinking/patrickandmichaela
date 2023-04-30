import "./RecentInstagramPosts.css";

import { useState, useEffect } from "react";

function isNotVideoPost(post: InstagramPost): boolean {
  return !post.url.startsWith("https://video-");
}

function stripTagsFromCaption(post: InstagramPost): InstagramPost {
  if (post.caption.includes("#")) {
    post.caption = post.caption.split("#")[0];
  }
  return post;
}

function limitToThreePosts(posts: InstagramPost[]): InstagramPost[] {
  return posts.slice(0, 3);
}

interface InstagramPost {
  url: string;
  caption: string;
  permalink: string;
}

export const RecentInstagramPosts = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    let ignore = false;
    fetch("https://patrickandmichaela.com/.netlify/functions/instagram")
      .then((response) => response.json())
      .then((data: InstagramPost[]) => data.filter(isNotVideoPost))
      .then((data: InstagramPost[]) => data.map(stripTagsFromCaption))
      .then((data: InstagramPost[]) => limitToThreePosts(data))
      .then((data: InstagramPost[]) => {
        if (!ignore) {
          setInstagramPosts(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="instagram-container">
      <div className="instagram-posts">
        {instagramPosts.map((post) => (
          <InstagramPost {...post} />
        ))}
      </div>
    </div>
  );
};

interface InstagramPostProps {
  url: string;
  caption: string;
  permalink: string;
}

const InstagramPost = ({ url, caption, permalink }: InstagramPostProps) => {
  return (
    <a href={permalink}>
      <div className="instagram-post">
        <img className="ig-image" src={url} />
        <p className="caption">{caption}</p>
      </div>
    </a>
  );
};
