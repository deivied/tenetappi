import { UserEntity } from ".";
import { DefaultRefEntity } from "./default-ref";

export enum ETYPE {
    VIDEO,
    IMAGE,
    AUDIO
}
export class MediaEntity extends DefaultRefEntity{
    type: ETYPE;
    url: string;
    owner: UserEntity;
    date: Date;
}

//dans ce cas ci le sauvegarde des média ce fait dans la base de donnée!!!
export class Medium extends DefaultRefEntity{
    type: ETYPE;
    media: Blob;
    owner: UserEntity;
    date: Date;
}