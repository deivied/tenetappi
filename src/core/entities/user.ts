import { DefaultRef } from "./default-ref";
import { Publication } from "./publication";

export class User extends DefaultRef{
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    publications: Publication[];
    followers: User[];
    followings: User[];
}