import { DefaultRef } from "./default-ref";
import { Media } from "./media";
import { User } from "./user";

export class Publication extends DefaultRef{
    title: string;
    content: Media;
    author: User;
    vues: User[];
    like: User[];    
}