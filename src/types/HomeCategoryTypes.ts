import type { Deal } from "./dealTypes";

export const HomeCategorySection = {
    ELECTRIC_CATEGORIES: "ELECTRIC_CATEGORIES",
    GRID: "GRID",
    SHOP_BY_CATEGORIES: "SHOP_BY_CATEGORIES",
    DEALS: "DEALS",
} as const;

export type HomeCategorySection =
    (typeof HomeCategorySection)[keyof typeof HomeCategorySection];

export interface HomeCategory {
    id?: number;
    name?: string;
    image: string;
    categoryId: string;
    section?: string;
    parentCategoryId?:string;
}


export interface HomeData {
    id:number;
    grid: HomeCategory[];
    shopByCategories: HomeCategory[];
    electricCategories: HomeCategory[];
    dealCategories: HomeCategory[];
    deals: Deal[];
}
