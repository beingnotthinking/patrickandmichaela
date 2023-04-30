import * as CarryOnAndADream from "./carry-on-and-a-dream.mdx";
import CarryOnAndADreamImage from "../images/carry-on-and-a-dream.webp";
import * as WhoIsBeingNotThinking from "./who-is-beingnotthinking.mdx";
import WhoIsBeingNotThinkingImage from "../images/who-is-beingnotthinking.webp";
import * as WhyBeingNotThinking from "./why-being-not-thinking.mdx";
import WhyBeingNotThinkingImage from "../images/why-being-not-thinking.webp";
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
}

// Posts at the top of the list will appear first on the website.
export const allPosts: PostMetadata[] = [
  {
    postId: CarryOnAndADream.id,
    mdx: CarryOnAndADream.default,
    imgSrc: CarryOnAndADreamImage,
    imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
    title: CarryOnAndADream.title,
    tags: CarryOnAndADream.tags,
  },
  {
    postId: WhoIsBeingNotThinking.id,
    mdx: WhoIsBeingNotThinking.default,
    imgSrc: WhoIsBeingNotThinkingImage,
    imgAlt: "A man kissing a woman on the cheek, on a beach in Bali",
    title:  WhoIsBeingNotThinking.title,
    tags: WhoIsBeingNotThinking.tags,
  },
  {
    postId: WhyWeChoseVanlife.id,
    mdx: WhyWeChoseVanlife.default,
    imgSrc: WhyWeChoseVanlifeImage,
    imgAlt: "Looking out the back of a camper van, a woman is relaxing and watching the ocean",
    title: WhyWeChoseVanlife.title,
    tags: WhyWeChoseVanlife.tags,
  },
  {
    postId: WhyBeingNotThinking.id,
    mdx: WhyBeingNotThinking.default,
    imgSrc: WhyBeingNotThinkingImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: WhyBeingNotThinking.title,
    tags: WhyBeingNotThinking.tags,
  },
  {
    postId: AddingMeditationToDailyLife.id,
    mdx: AddingMeditationToDailyLife.default,
    imgSrc: AddingMeditationToDailyLifeImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: AddingMeditationToDailyLife.title,
    tags: AddingMeditationToDailyLife.tags,
  },
  {
    postId: BeginningTheHealingProcess.id,
    mdx: BeginningTheHealingProcess.default,
    imgSrc: BeginningTheHealingProcessImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: BeginningTheHealingProcess.title,
    tags: BeginningTheHealingProcess.tags,
  },
  {
    postId: BuildingMeditationAsAHabit.id,
    mdx: BuildingMeditationAsAHabit.default,
    imgSrc: BuildingMeditationAsAHabitImage,
    imgAlt: "A boat floating off a beach in Bali",
    title: BuildingMeditationAsAHabit.title,
    tags: BuildingMeditationAsAHabit.tags,
  },
];

export const postsByTag = (tag: string) => {
  return allPosts.filter((post) => post.tags.includes(tag));
};

export const postById = (id: string) => {
  return allPosts.find((post) => post.postId === id);
};

export const featuredPosts = postsByTag("Featured");