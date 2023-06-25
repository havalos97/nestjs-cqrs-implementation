import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PetQuery } from "./pet.query";
import { PetDtoRepository } from "../../db/pet-dto.repository";
import { PetDto } from "../../dto/query/pet.dto";

@QueryHandler(PetQuery)
export class PetHandler implements IQueryHandler<PetQuery> {
  constructor(
    private readonly petDtoRepository: PetDtoRepository,
  ) {}

  async execute({ petId }: PetQuery): Promise<PetDto> {
    return this.petDtoRepository.findOne(petId);
  }
}