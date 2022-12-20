import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DefaultRef } from './default-ref.model';
import { Publication } from './publications.model';

export type UsersDocumment = Users & Document;

@Schema()
export class Users extends DefaultRef{
  @Prop({required: true, type: String})
  firstName: string;

  @Prop({required: true, type: String})
  lastName: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({type: Date})
  birthDate: Date;

  @Prop({ type: Types.ObjectId, ref: Publication.name })
  publications: Publication[];

  @Prop({type: Types.ObjectId, ref: Users.name})
  followers: Users[];

  @Prop({type: Types.ObjectId, ref: Users.name})
  followings: Users[];
}
