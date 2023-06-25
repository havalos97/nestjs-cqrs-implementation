import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntityFactory } from '../db/entity.factory';
import { Pet } from './Pet';
import { PetEntityRepository } from './db/pet-entity.repository';

@Injectable()
export class PetFactory implements EntityFactory<Pet> {
  constructor(
    private readonly petEntityRepository: PetEntityRepository,
  ) {}

  async create(
    name: string,
    age: number,
    ownerName: string,
  ): Promise<Pet> {
    const pet = new Pet(
      new ObjectId().toHexString(),
      name,
      age,
      ownerName,
    );
    await this.petEntityRepository.create(pet);
    return pet;
  }
}
