import "./Post.css";

import { PostMetadata } from "../../posts";

interface PostProps {
  post: PostMetadata;
}

const maxTitleHeight = 32;
const remPerWord = 8;

const Post = ({
  post: { postId, mdx, imgSrc, imgAlt, title, tags },
}: PostProps): JSX.Element => {
  const words = title.split(" ");
  const titleHeight = remPerWord * words.length;
  const fontSize = titleHeight > maxTitleHeight ? maxTitleHeight / words.length : remPerWord;

  return  <div className="post">
  <div className="title-container">
    <img className="post-image" src={imgSrc} alt={imgAlt} />
    <div className="title">
          {words.map((word) => (
            <span className="word" style={{ fontSize: `${fontSize}rem` }}>{word}</span>
          ))}
        </div>
  </div>
  {mdx({})}
</div>
};

export { Post };
