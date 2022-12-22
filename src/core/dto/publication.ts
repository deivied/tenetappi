import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MediaEntity, UserEntity } from "..";

export class CreatePublicationDTO{
    @IsOptional()
    @IsString()
    label: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsArray()
    content: MediaEntity[];

    @IsNotEmpty()
    author: UserEntity;
}

export class UpdatePublicationDTO{
    @IsOptional()
    @IsString()
    label: string;
    
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    isDeleted: boolean;
}