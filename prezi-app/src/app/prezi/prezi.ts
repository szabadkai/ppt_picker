import { Creator } from "./creator";

export interface Prezi {
    id: string;
    title: string;
    thumbnail: string;
    creator: Creator;
    createdAt: string;
}
