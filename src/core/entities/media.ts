import { DefaultRef } from "./default-ref";
import { User } from "./user";

export enum ETYPE {
    VIDEO,
    IMAGE,
    AUDIO
}
export class Media extends DefaultRef{
    type: ETYPE;
    url: string;
    owner: User;
    date: Date;
}

//dans ce cas ci le sauvegarde des média ce fait dans la base de donnée!!!
export class Medium extends DefaultRef{
    type: ETYPE;
    media: Blob;
    owner: User;
    date: Date;
}