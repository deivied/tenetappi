import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import { ETYPE } from 'src/core/entities/media';
import { DefaultRef } from './default-ref.model';
import { Users } from './users.model';

export type MediaDocument = Media & Document;

export enum EFormat {}

@Schema()
export class Media extends DefaultRef {
  @Prop({ required: true, type: ETYPE })
  type: ETYPE;

  @Prop({ required: true, type: String })
  URL: string;

  @Prop({ type: Types.ObjectId, ref: Users.name, required: true })
  owner: Users;

  // @Prop({required: true, type: EFormat})
  // quality: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
