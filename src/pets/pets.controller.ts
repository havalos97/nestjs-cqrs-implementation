import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PetDto } from './dto/query/pet.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { PetsQuery } from './queries/pets/pets.query';
import { PetQuery } from './queries/pet/pet.query';
import { CreatePetRequest } from './dto/request/create-pet-request.dto';
import { CreatePetCommand } from './commands/create-pet/command';
import { UpdatePetAgeRequest } from './dto/request/update-pet-age-request.dto';
import { UpdatePetCommand } from './commands/update-pet/command';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async listAllPets(): Promise<PetDto[]> {
    return this.queryBus.execute<PetsQuery, PetDto[]>(
      new PetsQuery(),
    )
  }

  @Get(':petId')
  async showPetData(@Param('petId') petId: string): Promise<PetDto> {
    return this.queryBus.execute<PetQuery, PetDto>(
      new PetQuery(petId),
    )
  }

  @Post()
  async createPet(
    @Body() createPetRequest: CreatePetRequest,
  ): Promise<void> {
    return this.commandBus.execute<CreatePetCommand, void>(
      new CreatePetCommand(createPetRequest),
    )
  }

  @Patch(':petId/age')
  async updatePetAge(
    @Param('petId') petId: string,
    @Body() updatePetAgeRequest: UpdatePetAgeRequest,
  ): Promise<void> {
    return this.commandBus.execute<UpdatePetCommand, void>(
      new UpdatePetCommand(
        petId,
        updatePetAgeRequest.age
      ),
    )
  }
}
