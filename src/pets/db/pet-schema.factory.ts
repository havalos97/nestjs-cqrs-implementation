import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntitySchemaFactory } from '../../db/entity-schema.factory';
import { Pet } from '../Pet';
import { PetSchema } from './pet.schema';

@Injectable()
export class PetSchemaFactory
  implements EntitySchemaFactory<PetSchema, Pet> {
  create(pet: Pet): PetSchema {
    return {
      _id: new ObjectId(pet.getId()),
      name: pet.getName(),
      age: pet.getAge(),
      ownerName: pet.getOwnerName(),
    };
  }

  createFromSchema(petSchema: PetSchema): Pet {
    return new Pet(
      petSchema._id.toHexString(),
      petSchema.name,
      petSchema.age,
      petSchema.ownerName,
    );
  }
}
