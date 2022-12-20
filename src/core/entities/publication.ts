import { DefaultRef } from "./default-ref";
import { user } from "./user";

export class publication extends DefaultRef{
    title: string;
    content: any;
    author: user;
    vues: user[];
    like: user[];    
}