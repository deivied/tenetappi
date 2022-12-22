import { Prop, Schema } from "@nestjs/mongoose";

export type DefaultRefDocument = DefaultRef & Document;

@Schema({})
export class DefaultRef{
    @Prop({required: true, type: Boolean, default: false})
    isDeleted: boolean;

    @Prop({required: true, type: Date})
    createdAt: Date;

    @Prop({required: true, type: Date})
    updatedAt: Date;
}