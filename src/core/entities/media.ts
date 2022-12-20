import { DefaultRef } from "./default-ref";
import { user } from "./user";

export enum ETYPE {
    VIDEO,
    IMAGE,
    AUDIO
}
export class media extends DefaultRef{
    type: ETYPE;
    media: Blob;
    owner: user;
    date: Date;
}