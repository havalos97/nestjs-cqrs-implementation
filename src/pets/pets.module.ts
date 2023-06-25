import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { PetSchema } from './db/pet.schema';
import { PetsController } from './pets.controller';
import { PetEntityRepository } from './db/pet-entity.repository';
import { PetDtoRepository } from './db/pet-dto.repository';
import { PetSchemaFactory } from './db/pet-schema.factory';
import { PetFactory } from './pet.factory';
import { PetQueryHandlers } from './queries';
import { PetCommandHandlers } from './commands';
import { PetEventHandlers } from './events';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: PetSchema.name,
        schema: SchemaFactory.createForClass(PetSchema),
      },
    ])
  ],
  controllers: [PetsController],
  providers: [
    PetEntityRepository,
    PetDtoRepository,
    PetSchemaFactory,
    PetFactory,
    ...PetQueryHandlers,
    ...PetCommandHandlers,
    ...PetEventHandlers,
  ]
})
export class PetsModule {}
