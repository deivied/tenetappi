import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DefaultRef } from './default-ref.model';
import { Users } from './users.model';

export type PublicationDocument = Publication & Document;

@Schema()
export class Publication  extends DefaultRef{
  @Prop({ type: String })
  title: string;

  @Prop({})
  content: any;

  @Prop({ type: Types.ObjectId, ref: Users.name })
  author: Users;

  @Prop({ type: Types.ObjectId, ref: Users.name })
  vues: Users[];

  @Prop({ type: Types.ObjectId, ref: Users.name })
  likes: Users[];
  
}
