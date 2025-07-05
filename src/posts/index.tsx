import * as AboutUs from "./about-us.mdx";
import AboutUsImage from "../images/who-are-patrick-and-michaela.webp";
import * as IcecoFridge from "./iceco-fridge.mdx";
import * as MantusAnchor from "./mantus-anchor.mdx";
import * as CarryOnAndADream from "./carry-on-and-a-dream.mdx";
import CarryOnAndADreamImage from "../images/carry-on-and-a-dream.webp";
import * as WhoArePatrickAndMichaela from "./who-are-patrick-and-michaela.mdx";
import WhoArePatrickAndMichaelaImage from "../images/who-are-patrick-and-michaela.webp";
import * as WhyWeChoseVanlife from "./why-we-chose-vanlife.mdx";
import WhyWeChoseVanlifeImage from "../images/why-we-chose-vanlife.webp";
import * as AddingMeditationToDailyLife from "./adding-meditation-to-daily-life.mdx";
import AddingMeditationToDailyLifeImage from "../images/adding-meditation-to-daily-life.webp";
import * as BeginningTheHealingProcess from "./beginning-the-healing-process.mdx";
import BeginningTheHealingProcessImage from "../images/beginning-the-healing-process.webp";
import * as BuildingMeditationAsAHabit from "./building-meditation-as-a-habit.mdx";
import BuildingMeditationAsAHabitImage from "../images/building-meditation-as-a-habit.webp";
import { MDXProps } from "mdx/types";

export interface PostMetadata {
  postId: string;
  mdx: (props: MDXProps) => JSX.Element;
  extras?: Record<string, string>;
  imgSrc: string;
  imgAlt: string;
  title: string;
  tags: string[];
  hidden?: boolean;
}

// Posts at the top of the list will appear first on the website.
export const allPosts: PostMetadata[] = [
  {
    postId: AboutUs.id,
    mdx: AboutUs.default,
    imgSrc: AboutUsImage,
    imgAlt: "Patrick and Michaela smiling on a beach at sunset",
    title: AboutUs.title,
    tags: AboutUs.tags,
  },
  {
    postId: IcecoFridge.id,
    mdx: IcecoFridge.default,
    imgSrc: "https://icecofreezer.com/cdn/shop/files/1_2514f1fd-17b7-4e7f-9aff-78e5ccacc329_1600x.jpg?v=1751424915",
    imgAlt: "ICECO fridge in a van conversion",
    title: IcecoFridge.title,
    tags: IcecoFridge.tags,
  },
  {
    postId: MantusAnchor.id,
    mdx: MantusAnchor.default,
    imgSrc: "https://www.mantusmarine.com/wp-content/uploads/2013/12/Mantus-Anchor-Exploded.png",
    imgAlt: "Mantus anchor on a sailboat bow",
    title: MantusAnchor.title,
    tags: MantusAnchor.tags,
  },
  {
    postId: CarryOnAndADream.id,
    mdx: CarryOnAndADream.default,
    imgSrc: CarryOnAndADreamImage,
    imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
    title: CarryOnAndADream.title,
    tags: CarryOnAndADream.tags,
    hidden: true,
  },
  {
    postId: WhoArePatrickAndMichaela.id,
    mdx: WhoArePatrickAndMichaela.default,
    imgSrc: WhoArePatrickAndMichaelaImage,
    imgAlt: "A man kissing a woman on the cheek, on a beach in Bali",
    title: WhoArePatrickAndMichaela.title,
    tags: WhoArePatrickAndMichaela.tags,
    hidden: true,
  },
  {
    postId: WhyWeChoseVanlife.id,
    mdx: WhyWeChoseVanlife.default,
    imgSrc: WhyWeChoseVanlifeImage,
    imgAlt: "Looking out the back of a camper van, a woman is relaxing and watching the ocean",
    title: WhyWeChoseVanlife.title,
    tags: WhyWeChoseVanlife.tags,
    hidden: true,
  },
  {
    postId: AddingMeditationToDailyLife.id,
    mdx: AddingMeditationToDailyLife.default,
    imgSrc: AddingMeditationToDailyLifeImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: AddingMeditationToDailyLife.title,
    tags: AddingMeditationToDailyLife.tags,
    hidden: true,
  },
  {
    postId: BeginningTheHealingProcess.id,
    mdx: BeginningTheHealingProcess.default,
    imgSrc: BeginningTheHealingProcessImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: BeginningTheHealingProcess.title,
    tags: BeginningTheHealingProcess.tags,
    hidden: true,
  },
  {
    postId: BuildingMeditationAsAHabit.id,
    mdx: BuildingMeditationAsAHabit.default,
    imgSrc: BuildingMeditationAsAHabitImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: BuildingMeditationAsAHabit.title,
    tags: BuildingMeditationAsAHabit.tags,
    hidden: true,
  },
];

export const postsByTag = (tag: string) => {
  return allPosts.filter((post) => post.tags.includes(tag) && !post.hidden);
};

export const postById = (id: string) => {
  return allPosts.find((post) => post.postId === id && !post.hidden);
};

export const featuredPosts = allPosts.filter((post) => post.tags.includes("Featured") && !post.hidden);
