import { DefaultRef } from "./default-ref";
import { publication } from "./publication";

export class user extends DefaultRef{
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    publications: publication[];
    followers: user[];
    followings: user[];
}