import { DefaultRef } from "./default-ref";
import { User } from "./user";

export class Activities extends DefaultRef{
    activitie: string;
    enrolled: User[];
}