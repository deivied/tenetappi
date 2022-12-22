import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DefaultRef } from './default-ref.model';

import { Media } from './media.model';
import { Users } from './users.model';


export type PublicationDocument = Publication & Document;

@Schema()
export class Publication extends DefaultRef {
  @Prop({ required: false, type: String })
  label: string;

  @Prop({ required: false, type: String })
  descriptiojn: string;

  @Prop({ required: false, type: [Types.ObjectId], ref: Media.name })
  content: Media[];

  @Prop({ required: true, type: Types.ObjectId, ref: Users.name })
  author: Users;

  @Prop({ type: [Types.ObjectId], ref: Users.name })
  vues: Users[];

  @Prop({ type: [Types.ObjectId], ref: Users.name })
  likes: Users[];
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);
