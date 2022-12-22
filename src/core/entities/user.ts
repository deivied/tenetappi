import { EGender } from "src/frameworks/persistences/mongo/models";
import { PublicationEntity } from "..";
import { DefaultRefEntity } from "./default-ref";

export class UserEntity extends DefaultRefEntity{
    firstName: string;
    lastName: string;
    gender: EGender;
    email: string;
    birthDate: Date;
    publications: PublicationEntity[];
    followers: UserEntity[];
    followings: UserEntity[];
}