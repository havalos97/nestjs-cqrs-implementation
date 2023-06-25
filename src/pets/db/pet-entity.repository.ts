import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../db/base-entity.repository';
import { Pet } from '../Pet';
import { PetSchema } from './pet.schema';
import { PetSchemaFactory } from '../db/pet-schema.factory';

@Injectable()
export class PetEntityRepository extends BaseEntityRepository<PetSchema, Pet> {
  constructor(
    @InjectModel(PetSchema.name)
    petModel: Model<PetSchema>,
    petSchemaFactory: PetSchemaFactory,
  ) {
    super(petModel, petSchemaFactory);
  }
}
