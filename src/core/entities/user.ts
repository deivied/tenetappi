import { EGender } from "src/frameworks/persistences/mongo/models";
import { DefaultRef } from "./default-ref";
import { Publication } from "./publication";

export class User extends DefaultRef{
    firstName: string;
    lastName: string;
    gender: EGender;
    email: string;
    birthDate: Date;
    publications: Publication[];
    followers: User[];
    followings: User[];
}