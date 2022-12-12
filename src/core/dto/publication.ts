import { IsBoolean, IsNotEmpty, IsOptional, IsSemVer, IsString } from "class-validator";
import { user } from "../entities/user";

export class CreatePublicationDTO{
    @IsOptional()
    @IsString()
    title: string;

    @IsNotEmpty()
    content: any;

    @IsNotEmpty()
    author: user;
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