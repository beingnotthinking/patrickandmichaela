import "./InstagramData.css";

interface InstagramPostProps {
  imgSrc: string;
  caption: string;
  permalink: string;
}

// InstagramPost component
const InstagramPost: React.FC<InstagramPostProps> = ({
  imgSrc,
  caption,
  permalink,
}) => {
  return (
    <a href={permalink}>
      <div className="instagram-post">
        <img className="ig-image" src={imgSrc} width="300rem" />
        <p className="caption">{caption}</p>
      </div>
    </a>
  );
};

function filterOutVideoUrls(
  items: { id: string; url: string; caption: string; permalink: string }[]
) {
  return items.filter((item) => !item.url.startsWith("https://video-"));
}

// InstagramData function
async function InstagramData() {
  try {
    const response = await fetch(
      "https://patrickandmichaela.com/.netlify/functions/instagram"
    );
    let instagramPostsNoFilter = await response.json();

    let instagramPosts = filterOutVideoUrls(instagramPostsNoFilter);

    let post0 = instagramPosts[0];
    let photoUrl0 = post0.url;
    let caption0 = post0.caption.split("#")[0];
    let permalink0 = post0.permalink;

    let post1 = instagramPosts[1];
    let photoUrl1 = post1.url;
    let caption1 = post1.caption.split("#")[0];
    let permalink1 = post1.permalink;

    let post2 = instagramPosts[2];
    let photoUrl2 = post2.url;
    let caption2 = post2.caption.split("#")[0];
    let permalink2 = post2.permalink;

    return (
      <div className="instagram-container">
        <div className="instagram-posts">
          <InstagramPost
            imgSrc={photoUrl0}
            caption={caption0}
            permalink={permalink0}
          />
          <InstagramPost
            imgSrc={photoUrl1}
            caption={caption1}
            permalink={permalink1}
          />
          <InstagramPost
            imgSrc={photoUrl2}
            caption={caption2}
            permalink={permalink2}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}

export { InstagramData };
