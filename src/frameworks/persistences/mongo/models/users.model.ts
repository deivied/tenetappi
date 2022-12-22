import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DefaultRef } from './default-ref.model';
import { Publication } from './publication.model';

export type UsersDocumment = Users & Document;

export enum EGender {
  MALE,
  FEMALE,
}

@Schema()
export class Users extends DefaultRef {
  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop({ required: true, type: String })
  gender: EGender;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: Date })
  birthDate: Date;

  @Prop({ type: [Types.ObjectId], ref: 'Publication', default: [] })
  publications: Publication[];

  @Prop({ type: [Types.ObjectId], ref: 'Users', default: [] })
  followers: Users[];

  @Prop({ type: [Types.ObjectId], ref: 'Users', default: [] })
  followings: Users[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
