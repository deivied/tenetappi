import { IsBoolean, IsNotEmpty, IsOptional, IsSemVer, IsString } from "class-validator";
import { User } from "../entities";

export class CreatePublicationDTO{
    @IsOptional()
    @IsString()
    title: string;

    @IsNotEmpty()
    content: any;

    @IsNotEmpty()
    author: User;
}

export class UpdatePublicationDTO{
    @IsOptional()
    @IsString()
    title: string;

    @IsNotEmpty()
    content: any;

    @IsOptional()
    @IsBoolean()
    isDeleted: boolean;
}