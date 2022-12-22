import { MediaEntity, UserEntity } from ".";
import { DefaultRefEntity } from "./default-ref";

export class PublicationEntity extends DefaultRefEntity{
    label: string;
    description: string;
    content: MediaEntity[];
    author: UserEntity;
    vues: UserEntity[];
    likes: UserEntity[];    
}