import { DefaultRefEntity } from "./default-ref";
import { UserEntity } from "./user";

export class ActivitiesEntity extends DefaultRefEntity{
    activitie: string;
    enrolled: UserEntity[];
}