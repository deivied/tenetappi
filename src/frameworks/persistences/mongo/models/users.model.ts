import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DefaultRef, Publication } from 'src/core';


export type UsersDocumment = Users & Document;

@Schema()
export class Users extends DefaultRef {
  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: Date })
  birthDate: Date;

  @Prop({ type: [Types.ObjectId], ref: Publication.name })
  publications: Publication[];

  @Prop({ type: [Types.ObjectId], ref: Users.name })
  followers: Users[];

  @Prop({ type: [Types.ObjectId], ref: Users.name })
  followings: Users[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
