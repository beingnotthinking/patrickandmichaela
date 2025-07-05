import "./Post.css";

import { PostMetadata } from "../../posts";

interface PostProps {
  post: PostMetadata;
}

const Post = ({
  post: { postId, mdx, imgSrc, imgAlt, title, tags },
}: PostProps): JSX.Element => {
  return (
    <div className="post">
      <div className="title-container">
        <img className="post-image" src={imgSrc} alt={imgAlt} />
        <h1 className="title">{title}</h1>
      </div>
      {mdx({})}
    </div>
  );
};

export { Post };
