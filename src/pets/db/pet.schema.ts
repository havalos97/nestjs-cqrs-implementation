import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/db/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'pets' })
export class PetSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name: string;

  @Prop()
  readonly age: number;

  @Prop()
  readonly ownerName: string;
}
