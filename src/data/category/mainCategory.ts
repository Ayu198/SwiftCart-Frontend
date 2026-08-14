import { menLevelTwo } from "./level two/menLevelTwo";
import { womenLevelTwo } from "./level two/womenLevelTwo";
import { furnitureLevelTwo } from "./level two/furnitureLevelTwo";
import { electronicsLevelTwo } from "./level two/electronicsLevelTwo";

export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: menLevelTwo,
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: womenLevelTwo,
  },
  {
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: furnitureLevelTwo,
  },
  {
    name: "Electronics",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: electronicsLevelTwo,
  },
];