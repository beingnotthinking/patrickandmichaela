import "./PostPreview.css";

import { Link } from "react-router-dom";

interface PostPreviewProps {
  postId: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
}

function PostPreview({ postId, imgSrc, imgAlt, title }: PostPreviewProps) {
  return (
    <div className="post-preview">
      <img src={imgSrc} alt={imgAlt} width="300rem" />
      <h2>{title}</h2>
      <Link to={postId}>Read More</Link>
    </div>
  );
}

export { PostPreview };
